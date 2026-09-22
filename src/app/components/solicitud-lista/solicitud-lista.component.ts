import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { ApiService } from '../../core/services/api.service';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-solicitud-lista',
  templateUrl: './solicitud-lista.component.html',
  styleUrls: ['./solicitud-lista.component.css']
})
export class SolicitudListaComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  solicitudSeleccionada?: Solicitud;

  seleccionarSolicitud(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }

  // Variable para almacenar los datos obtenidos de la API REST
  datosExternos: any[] = [];

  constructor(
    private apiService: ApiService,
    private solicitudService: SolicitudService
  ) {}
  
  // Llamamos al método para obtener los datos de prueba al inicializar el componente
  ngOnInit(): void {
    this.solicitudes = this.solicitudService.obtenerSolicitudes();

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
