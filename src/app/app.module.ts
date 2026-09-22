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
    SolicitudListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Luego el HttpClientModule lo agregamos con los demás imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
