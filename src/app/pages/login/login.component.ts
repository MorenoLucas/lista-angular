import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogueadoService } from '../../servicios/logueado/logueado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // email: string;
  // password: string;
  hide = true;
  // definimos la variable que controla el formGroup
  formData: FormGroup;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private logueado: LogueadoService,
    private fb: FormBuilder
  ) {}
  // aqui enlazamos, y ponemos las validaciones
  ngOnInit(): void {
    const email = [
      { value: '', disabled: false },
      [Validators.email, Validators.required],
    ];
    const password = [
      { value: '', disabled: false },
      [Validators.required, Validators.minLength(2), Validators.maxLength(6)],
    ];
    const config = { email, password };
    this.formData = this.fb.group(config);
  }
  // devuelve una variable que se puede consultar
  get email() {
    return this.formData.get('email');
  }
  get password() {
    return this.formData.get('password');
  }
  login() {
    if (true) {
      console.log('Hay un email y un password');
      // comprobar si coincide el mail y el pass
      if (
        // this.email === 'sl.lucasmoreno@gmail.com' &&
        // this.password === '123'
        true
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
