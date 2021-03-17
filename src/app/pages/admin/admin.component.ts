import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  jornadaAFiltrar: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // asignamos la información del hijo al padre
  filtrarPorJornada(ev: number) {
    console.log(ev);
    this.jornadaAFiltrar = ev;
  }
}
