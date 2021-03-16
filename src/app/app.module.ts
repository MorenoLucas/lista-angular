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
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ListadoRolComponent } from './components/listado-rol/listado-rol.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { JornadasComponent } from './components/jornadas/jornadas.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    IonicModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
