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
import { Sort } from '@angular/material/sort';

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
  sortData(sort: Sort) {
    const data = this.alumnosArrayFiltrado.slice();
    if (!sort.active || sort.direction === '') {
      this.alumnosArrayFiltrado = data;
      return;
    }

    this.alumnosArrayFiltrado = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nombre':
          return compare(a?.data?.nombre, b?.data?.nombre, isAsc);
        case 'rol':
          return compare(a?.data?.rol, b?.data?.rol, isAsc);
        case 'dia':
          return compare(a?.data?.dia, b?.data?.dia, isAsc);
        case 'dni':
          return compare(a?.data?.dni, b?.data?.dni, isAsc);
        case 'tel':
          return compare(a?.data?.tel, b?.data?.tel, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
