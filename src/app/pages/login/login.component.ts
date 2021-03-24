import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogueadoService } from '../../servicios/logueado/logueado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private logueado: LogueadoService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.email && this.password) {
      console.log('Hay un email y un password');
      // comprobar si coincide el mail y el pass
      if (
        this.email === 'sl.lucasmoreno@gmail.com' &&
        this.password === '123'
      ) {
        // lleva a pagina admin
        this.router.navigateByUrl('admin');
        // creamos servicio para guardar si estamos logeados
        this.logueado.setEstado(true);
      } else {
        this.snackBar.open('El mail o pass son Incorrectos', 'OK', {
          panelClass: ['errorSnackBar'],
        });
        this.logueado.setEstado(false);
      }
    } else {
      this.snackBar.open('Falta email o passaword', 'OK', {
        panelClass: ['errorSnackBar'],
      });
      this.logueado.setEstado(false);
    }
  }
}
