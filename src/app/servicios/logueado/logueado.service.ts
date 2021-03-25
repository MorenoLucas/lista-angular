import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogueadoService {
  private estoyLogueado: boolean = false;
  constructor() {}

  getEstado() {
    // devolemos el dato estoyLoguedo
    return this.estoyLogueado;
  }

  setEstado(estado: boolean) {
    // asiganamos el estado de la variable
    this.estoyLogueado = estado;
  }
}
