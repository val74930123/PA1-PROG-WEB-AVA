import { Component } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';

@Component({
  selector: 'app-solicitud-lista',
  templateUrl: './solicitud-lista.component.html',
  styleUrls: ['./solicitud-lista.component.css']
})
export class SolicitudListaComponent {
  solicitudes: Solicitud[] = [
    {
      id: 1,
      titulo: 'Constancia de estudios',
      descripcion: 'Solicitud de constancia académica.',
      estudiante: 'Ana Torres',
      estado: 'Pendiente',
      fecha: '21/09/2026'
    },
    {
      id: 2,
      titulo: 'Reserva de laboratorio',
      descripcion: 'Solicitud de reserva del laboratorio.',
      estudiante: 'Luis Mendoza',
      estado: 'En proceso',
      fecha: '20/09/2026'
    }
  ];

  solicitudSeleccionada?: Solicitud;

  seleccionarSolicitud(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }
}
