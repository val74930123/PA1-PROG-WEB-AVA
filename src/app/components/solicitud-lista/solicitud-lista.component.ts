import { Component } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud-lista',
  templateUrl: './solicitud-lista.component.html',
  styleUrls: ['./solicitud-lista.component.css']
})
export class SolicitudListaComponent {

  solicitudes: Solicitud[] = [];
  solicitudSeleccionada?: Solicitud;

  constructor(private solicitudService: SolicitudService) {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();
  }

  seleccionarSolicitud(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }
}