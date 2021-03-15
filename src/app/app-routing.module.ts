import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
