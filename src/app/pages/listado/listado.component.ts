import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as dni from 'dni-js-validator';
import * as validator from 'email-validator';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private snackbar: MatSnackBar
  ) {
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

    if (this.comprobacion()) {
      this.db
        .collection('alumnos')
        .doc(dni)
        .set({
          nombre: nombre,
          tel: tel,
          dni: dni,
          email: email,
          rol: this.rol,
          date: new Date(),
          jornada: parseInt(this.jornada),
        })
        .then(() => {
          // respuesta exitosa
          this.snackbar.open('Formulario Correcto', 'OK', {
            panelClass: ['successSnackbar'],
          });
          // redireccionamos a una pagina de bienvenida
          this.router.navigateByUrl('bienvenida');
        })
        .catch((e) => {
          // nos da error
          console.error('Error', e);
        });
    } else {
      console.log('aquie aparecera el error');
      this.nombreWrong == null ? (this.nombreWrong = 'error') : null;
      this.mailWrong == null ? (this.mailWrong = 'error') : null;
      this.telWrong == null ? (this.telWrong = 'error') : null;
      this.dniWrong == null ? (this.dniWrong = 'error') : null;
      // aqui sale el SNACKBAR, el estilo esta en STYLES.CSS
      this.snackbar.open('El formulario esta mal', 'Vale', {
        duration: 2000,
        panelClass: ['errorSnackBar'],
      });
    }
  }
  // tomamos el evento del hijo y lo asignamos en este componente
  rolDefinido(rolParametro: string) {
    this.rol = rolParametro;
  }

  comprobacion() {
    const nombre = this.nombreWrong === 'success';
    const phone = this.telWrong === 'success';
    const mail = this.mailWrong === 'success';
    const dni = this.dniWrong === 'success';

    if (nombre && phone && mail && dni) {
      return true;
    } else {
      return false;
    }
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
    // if (tel.length == 9) {
    //   this.telWrong = 'success';
    // } else {
    //   this.telWrong = 'error';
    // }
    tel.length == 9 ? (this.telWrong = 'success') : (this.telWrong = 'error');
  }
  comprobarDni(dnie: any) {
    // es lo mismo asi que con el if pero con sola una instruccion
    // (dni.isValid(dnie) ? this.dniWrong = 'success' : this.dniWrong = 'error')
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
