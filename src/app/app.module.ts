import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { PipeMinusculasPipe } from './pipes/pipeMinusculas/pipe-minusculas.pipe';
import { AumentarDirective } from './directives/aumentar/aumentar.directive';
import { IconoRolPipe } from './pipes/iconoRol/icono-rol.pipe';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    ListadoRolComponent,
    AdminComponent,
    ListadoAlumnosComponent,
    JornadasComponent,
    BienvenidaComponent,
    PipeMinusculasPipe,
    AumentarDirective,
    IconoRolPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
