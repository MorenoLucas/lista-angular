import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent implements OnInit, OnChanges {
  alumnosArray = [];
  alumnosRef;
  alumnosArrayFiltrado = [];

  @Input() jornada;

  constructor(private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos');
  }

  ngOnInit(): void {
    const alumnos = this.db.collection('alumnos').snapshotChanges();
    alumnos.subscribe((res: any) => {
      //  en un nuevo array nos da el id y los datos y se lo asignamos a alumnos Array
      const arrayMapped = res.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { data, id };
      });
      this.alumnosArray = arrayMapped;
      this.alumnosArrayFiltrado = this.alumnosArray;
      console.log('ARRAY MAPPED', arrayMapped);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filtrar();
  }

  filtrar() {
    const jornadaParseada = parseInt(this.jornada);
    this.alumnosArrayFiltrado = this.alumnosArray.filter((alumnos) => {
      if (alumnos.data.jornada == jornadaParseada) {
        return true;
      } else {
        return false;
      }
    });
    console.log(this.alumnosArrayFiltrado);
  }

  eliminar(id) {
    console.log('Nombre', id);
    // this.alumnosRef.doc(id).delete();

    Swal.fire({
      title: 'Estas seguro que quieres eliminar?',

      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        // lo quiero eliminar
        this.alumnosRef.doc(id).delete();
      }
    });
  }
}
