import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jornadas',
  templateUrl: './jornadas.component.html',
  styleUrls: ['./jornadas.component.css'],
})
export class JornadasComponent implements OnInit {
  selectedItem;
  jornadasArray = [];
  jornadasRef;
  cuantasJornadasHay;
  jornadaActual;
  subscripcion;

  @Output() jornada = new EventEmitter();
  subscripcionAjornadas: Subscription;

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.jornadasRef = this.db
      .collection('jornadas')
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
        this.cuantasJornadasHay = res.find((ele) => {
          console.log(ele['jornadas']);
          return ele['jornadas'];
        });
        this.crearArrayDeJornadas(this.cuantasJornadasHay.jornadas);
        this.jornadaActual = res.find((ele) => {
          console.log(ele['jornada']);
          return ele['jornada'];
        });
        this.selectedItem = this.jornadaActual.jornada;
      });
  }
  onChange(ev) {
    this.jornada.emit(ev);
  }

  ngOnDestroy() {
    if (this.subscripcionAjornadas) {
      this.subscripcionAjornadas.unsubscribe();
    }
  }
  crearArrayDeJornadas(jornadas: any) {
    this.jornadasArray = [];
    for (let index = 0; index < jornadas; index++) {
      // agrega las jornadas que hay dentro de la matriz
      this.jornadasArray.push(index + 1);
    }
  }
}
