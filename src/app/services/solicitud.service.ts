import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private solicitudes: Solicitud[] = [
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

  obtenerSolicitudes(): Solicitud[] {
    return this.solicitudes;
  }

  agregarSolicitud(datos: { titulo: string; estudiante: string; descripcion: string }): Solicitud {
    const nuevaSolicitud: Solicitud = {
      id: this.solicitudes.length + 1,
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      estudiante: datos.estudiante,
      estado: 'Pendiente',
      fecha: new Date().toLocaleDateString('es-PE')
    };

    this.solicitudes = [...this.solicitudes, nuevaSolicitud];
    return nuevaSolicitud;
  }
}
