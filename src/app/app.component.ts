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
export class AppComponent{
  title = 'notes';
}
