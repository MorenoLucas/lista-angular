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
  alumnosRef; 
  alumnosArray = [];
  
  constructor(private router: Router, private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos');
    const alumnos = this.db.collection('alumnos').valueChanges();
    alumnos.subscribe((res)=>{
      this.alumnosArray = res
    });
  }

  ngOnInit(): void {}
  
  crearAlumno(nombre, apellido1, apellido2?){
   console.log('Nombre', nombre);
   console.log('Apellido', apellido1);
   console.log('Apellido', apellido2);
  //  añadimos alumnos a la base de datos 
   this.alumnosRef.add({nombre: nombre, apellido1: apellido1, apellido2:apellido2 })

   


 }
 eliminar(nombre){
   console.log('Nombre', nombre);

 }
  salir() {
    this.router.navigateByUrl('login');
  }
}
