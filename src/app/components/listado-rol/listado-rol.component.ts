import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-rol',
  templateUrl: './listado-rol.component.html',
  styleUrls: ['./listado-rol.component.css'],
})
export class ListadoRolComponent implements OnInit {
  // para pasar al componente padre EventEmitter
  @Output() rol = new EventEmitter();
  rolesArray = ['jugador', 'arbitro', 'entrenador', 'otros'];
  selectedItem = 'jugador';
  constructor() {}

  ngOnInit(): void {
    // le ponemos por defecto jugador, se ejecuta cuando inicia el componente
    this.rol.emit(this.selectedItem);
  }
  onChange(ev: string) {
    // aca emito lo capturado al componente padre
    this.rol.emit(ev);
  }
}
