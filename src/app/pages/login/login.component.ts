import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.email && this.password) {
      console.log('Hay un email y un password');
      // llevar a pagina listado
      this.router.navigateByUrl('listado')
    } else {
      console.log('falta email o pass');
    }
  }
}
