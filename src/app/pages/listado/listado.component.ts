import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as dni from 'dni-js-validator';
import * as validator from 'email-validator';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  nombre: string;
  tel: number;
  alumnosRef;
  alumnosArray = [];
  rol: string;
  jornada;
  nombreWrong = null;
  telWrong;
  dniWrong;
  mailWrong;
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

  crearAlumno(nombre, tel, dni, email) {
    //  añadimos alumnos a la base de datos y le creamos el ID
    this.alumnosRef.doc(dni).set({
      nombre: nombre,
      tel: tel,
      dni: dni,
      email: email,
      rol: this.rol,
      date: new Date(),
      jornada: parseInt(this.jornada),
    });
  }
  // tomamos el evento del hijo y lo asignamos en este componente
  rolDefinido(rolParametro: string) {
    this.rol = rolParametro;
  }

  jornadasDefinidas(ev) {
    this.jornada = ev;
  }
  salir() {
    this.router.navigateByUrl('login');
  }
  comprobarNombre(nombre: string) {
    if (nombre.length > 100 || nombre.length < 1) {
      this.nombreWrong = 'error';
    } else {
      this.nombreWrong = 'success';
    }
  }

  comprobarTel(tel: string) {
    if (tel.length == 9) {
      this.telWrong = 'success';
    } else {
      this.telWrong = 'error';
    }
  }
  comprobarDni(dnie: any) {
    if (dni.isValid(dnie)) {
      this.dniWrong = 'success';
    } else {
      this.dniWrong = 'error';
    }
  }
  comprobarMail(mail) {
    if (validator.validate(mail)) {
      this.mailWrong = 'success';
    } else {
      this.mailWrong = 'error';
    }
  }
}
