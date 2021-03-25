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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

const config = {
  apiKey: 'AIzaSyCyFEMjmxH00nYZWQ4MMqzDNPK5n3EBPhc',
  authDomain: 'lista-curso-f7744.firebaseapp.com',
  projectId: 'lista-curso-f7744',
  storageBucket: 'lista-curso-f7744.appspot.com',
  messagingSenderId: '278678780821',
  appId: '1:278678780821:web:51b8dff9afbb2dece5549c',
  measurementId: 'G-2BRTHMD3Z4',
};
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
