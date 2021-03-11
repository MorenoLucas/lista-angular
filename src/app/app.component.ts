import { Component, OnDestroy } from '@angular/core';
// servicio para base de datos
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'lista-angular';
  // para poder leer base de datos de firebase, siempre constructor
  constructor(private db: AngularFirestore) {
    const prueba = this.db.collection('prueba').valueChanges();
    prueba.subscribe(console.log);
}


}
