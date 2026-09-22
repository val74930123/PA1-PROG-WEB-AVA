import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { SolicitudListaComponent } from './components/solicitud-lista/solicitud-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'solicitudes', pathMatch: 'full' },
  { path: 'solicitudes', component: SolicitudListaComponent },
  { path: 'nueva-solicitud', component: SolicitudFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
