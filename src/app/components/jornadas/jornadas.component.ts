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

  @Output() jornada = new EventEmitter();
  constructor(private db: AngularFirestore) {
    this.jornadasRef = this.db
      .collection('jornadas')
      .valueChanges()
      .subscribe((res) => {
        console.log(res);
        this.cuantasJornadasHay = res.find((ele) => {
          return ele['jornadas'];
        });
        this.jornadaActual = res.find((ele) => {
          return ele['jornadaActual'];
        });
      });
  }

  ngOnInit(): void {}
  onChange(ev) {
    this.jornada.emit(ev);
  }
}
