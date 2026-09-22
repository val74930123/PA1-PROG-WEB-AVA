import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';

@Component({
  selector: 'app-solicitud-card',
  templateUrl: './solicitud-card.component.html',
  styleUrls: ['./solicitud-card.component.css']
})
export class SolicitudCardComponent {
  @Input() solicitud!: Solicitud;

  @Output() verDetalle = new EventEmitter<Solicitud>();

  mostrarDetalle(): void {
    this.verDetalle.emit(this.solicitud);
  }
}
