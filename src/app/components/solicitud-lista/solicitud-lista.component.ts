import { Component, OnInit } from '@angular/core'; // Importamos Component y OnInit para definir el componente.
import { Solicitud } from 'src/app/models/solicitud';
import { ApiService } from '../../core/services/api.service'; // Importamos el servicio ApiService para consumir la API REST

@Component({
  selector: 'app-solicitud-lista',
  templateUrl: './solicitud-lista.component.html',
  styleUrls: ['./solicitud-lista.component.css']
})
export class SolicitudListaComponent implements OnInit {
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

  // Variable para almacenar los datos obtenidos de la API REST
  datosExternos: any[] = [];

  // Inyectamos el servicio ApiService en el constructor del componente
  constructor(private apiService: ApiService) { }
  
  // Llamamos al método para obtener los datos de prueba al inicializar el componente
  ngOnInit(): void {
    
    this.apiService.obtenerDatosDePrueba().subscribe({
      next: (datos) => {
        this.datosExternos = datos;
        console.log('Datos REST obtenidos con éxito:', this.datosExternos);
      },
      error: (error) => {
        console.error('Error al consumir la API REST:', error);
      }
    });
  }
}