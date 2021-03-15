import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent implements OnInit {
  alumnosArray = [];
  alumnosRef;
  constructor(private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos');
  }

  ngOnInit(): void {}
  eliminar(id) {
    console.log('Nombre', id);
    this.alumnosRef.doc(id).delete();
  }
}
