import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import * as dni from 'dni-js-validator';

export interface Asistente {
  name: string;
  rol: string;
  tel: string;
  dni: string;
  eliminar: any;
}
@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css'],
})
export class ListadoAlumnosComponent implements OnInit, OnChanges {
  alumnosArray = [];
  alumnosRef;
  alumnosArrayFiltrado = [];
  sortedData;
  @Input() jornada;

  displayedColumns: string[] = ['nombre', 'rol', 'tel', 'dni', 'eliminar'];
  dataSource;

  constructor(private db: AngularFirestore) {
    this.alumnosRef = this.db.collection('alumnos');
    this.sortedData = this.alumnosArray.slice();
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
      this.filtrar();
      console.log('ARRAY MAPPED', arrayMapped);
    });
  }

  @ViewChild(MatSort) sort: MatSort;

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
    // aqui ordena la lista
    this.dataSource = new MatTableDataSource(this.alumnosArrayFiltrado);
    this.dataSource.sort = this.sort;
  }

  eliminar(id) {
    console.log('Nombre', id);
    // this.alumnosRef.doc(id).delete();
    // es un servicio de afuera que muestra mensaje de alerta
    Swal.fire({
      title: 'Estas seguro que quieres eliminar?',
      text: id,
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
  // funcion de ordenar los campos
}
