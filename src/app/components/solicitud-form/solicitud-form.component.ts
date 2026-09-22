import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-solicitud-form',
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.css']
})
export class SolicitudFormComponent {

  solicitudForm: FormGroup;

  solicitudRegistrada = false;

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService
  ) {
    this.solicitudForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      estudiante: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get titulo() {
    return this.solicitudForm.get('titulo');
  }

  get estudiante() {
    return this.solicitudForm.get('estudiante');
  }

  get descripcion() {
    return this.solicitudForm.get('descripcion');
  }

  onSubmit(): void {
    if (this.solicitudForm.invalid) {
      this.solicitudForm.markAllAsTouched();
      this.solicitudRegistrada = false;
      return;
    }

    this.solicitudService.agregarSolicitud(this.solicitudForm.value);
    this.solicitudRegistrada = true;
    this.solicitudForm.reset();
  }
}
