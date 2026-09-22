import { ReactiveFormsModule } from '@angular/forms';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';// Importamos el HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SolicitudCardComponent } from './components/solicitud-card/solicitud-card.component';
import { SolicitudListaComponent } from './components/solicitud-lista/solicitud-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolicitudCardComponent,
    SolicitudListaComponent,
    SolicitudFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Luego el HttpClientModule lo agregamos con los demás imports
    ReactiveFormsModule // Necesario para el formulario reactivo de Actividad 3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
