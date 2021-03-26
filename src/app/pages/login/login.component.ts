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
  pipeVar = 'HOLA';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private logueado: LogueadoService,
    private fb: FormBuilder
  ) {}
  // aqui declaramos, y ponemos las validaciones
  ngOnInit(): void {
    const email = [
      { value: '', disabled: false },
      [Validators.email, Validators.required],
    ];
    const password = [
      { value: '', disabled: false },
      [Validators.required, Validators.minLength(2), Validators.maxLength(6)],
      Validators.pattern('^[^.]+$'),
    ];
    const config = { email, password };
    this.formData = this.fb.group(config);
  }
  // enlazamos devuelve una variable que se puede consultar
  get email() {
    return this.formData.get('email');
  }
  get password() {
    return this.formData.get('password');
  }
  login() {
    // comprobar si coincide el mail y el pass
    if (
      this.formData.get('email').value === 'sl.lucasmoreno@gmail.com' &&
      this.formData.get('password').value === '123'
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
  }
}
