import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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
  crearArrayDeJornadas(jornadas: any) {
    this.jornadasArray = [];
    for (let index = 0; index < jornadas; index++) {
      this.jornadasArray.push(index + 1);
    }
  }
}
