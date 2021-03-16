import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  nombre: string;
  apellido1: string;
  apellido2: string;
  tel: number;
  alumnosRef;
  alumnosArray = [];
  rol: string;
  jornada;

  constructor(private router: Router, private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos');
    // toma el id y los datos del elmento
    const alumnos = this.db.collection('alumnos').snapshotChanges();
    alumnos.subscribe((res: any) => {
      console.log('LINEA 26');
      //  en un nuevo array nos da el id y los datos y se lo asignamos a alumnos Array
      const arrayMapped = res.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { data, id };
      });
      this.alumnosArray = arrayMapped;
      console.log('ARRAY MAPPED', arrayMapped);
    });
  }

  ngOnInit(): void {}

  crearAlumno(nombre, apellido1, tel, dni, email, apellido2?) {
    console.log('Nombre', nombre);
    console.log('Apellido', apellido1);
    console.log('Apellido', apellido2);
    console.log(tel);
    console.log(dni);
    console.log(email);
    //  añadimos alumnos a la base de datos y le creamos el ID
    this.alumnosRef.doc(dni).set({
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      tel: tel,
      dni: dni,
      email: email,
      rol: this.rol,
      date: new Date(),
      jornada: parseInt(this.jornada),
    });
  }
  rolDefinido(rolParametro: string) {
    this.rol = rolParametro;
  }
  eliminar(id) {
    console.log('Nombre', id);
    this.alumnosRef.doc(id).delete();
  }
  jornadasDefinidas(ev) {
    this.jornada = ev;
  }
  salir() {
    this.router.navigateByUrl('login');
  }
}
