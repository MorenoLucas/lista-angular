import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LogueadoService } from '../../servicios/logueado/logueado.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsLogueadoGuard implements CanActivate {
  // importamos el servicio logueadoService
  constructor(private logueado: LogueadoService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // obetenemos el estado del logueado y si es false va al login
    // if (this.logueado.getEstado()) {
    //   return true;
    // } else {
    //   this.route.navigateByUrl('/login');
    //   return false;
    // }
    //  volver a poner lo de arriba
    return true;
  }
}
