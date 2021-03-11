import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  nombre:string;
  apellido1:string;
  apellido2:string;

  constructor(private router: Router, private db: AngularFirestore) {
    const alumnos = this.db.collection('alumnos').valueChanges();
    alumnos.subscribe(console.log);
  }

  ngOnInit(): void {}
 crearAlumno(nombre, apellido1, apellido2?){
   

 }
  salir() {
    this.router.navigateByUrl('login');
  }
}
