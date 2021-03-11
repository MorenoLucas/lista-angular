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

const config = {
  apiKey: "AIzaSyCyFEMjmxH00nYZWQ4MMqzDNPK5n3EBPhc",
  authDomain: "lista-curso-f7744.firebaseapp.com",
  projectId: "lista-curso-f7744",
  storageBucket: "lista-curso-f7744.appspot.com",
  messagingSenderId: "278678780821",
  appId: "1:278678780821:web:51b8dff9afbb2dece5549c",
  measurementId: "G-2BRTHMD3Z4"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
