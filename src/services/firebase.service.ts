import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Note } from 'src/models/note';

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  getNotes(){
    return this.firestore.collection("notas").snapshotChanges();
  }

  postNote(data){
    return this.firestore.collection("notas").add(data);
  }

  deleteNote(id){
    return this.firestore.collection("notas").doc(id).delete();
  }
}
