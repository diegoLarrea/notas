import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/services/firebase.service'
import { Note } from 'src/models/note';
import { ToastrService } from 'ngx-toastr';
declare var $:any;
declare var loadingOverlay:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private firestore: FirebaseService, private toastr: ToastrService){

  }
  title = 'notes';
  notas: Note[] = [];
  spinHandle = null;
  ngOnInit(){

    $('#nota').summernote({
      dialogsInBody: true,
    });

    $('select').selectpicker({container:'body'});

    this.spinHandle = loadingOverlay().activate();

    this.getNotas();
  }

  getNotas(){
    this.firestore.getNotes().subscribe(data => {
      this.notas = data.map(e => {
        let r: Note = e.payload.doc.data() as Note;
        r.id = e.payload.doc.id;
        r.fecha = r.fecha.toDate().toLocaleString();
        loadingOverlay().cancel(this.spinHandle);
        return r;
      })
    });
  }

  postNote(){
    if($("#relevancia").val().length > 0 && $("#nota").summernote('code').toString().length > 0){
      console.log();
      this.firestore.postNote({nota:$("#nota").summernote('code').toString(), fecha:new Date(), relevancia:$("#relevancia").val()})
      .then(
        res =>{}
      )
    }else{
      this.toastr.error("Complete los campos");
    }
  }
}