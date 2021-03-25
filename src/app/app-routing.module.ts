import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { IsLogueadoGuard } from './guard/isLogueado/is-logueado.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  // aqui ponemos el guard para que no deje entrar a admin si no esta loguedo
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsLogueadoGuard],
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
