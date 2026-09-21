import { Estudiante } from './estudiante.model';
/* CATALOGO*/ 
export type TipoSolicitud = 
    | 'CONSTANCIA_MATRICULA'
    | 'CONSTANCIA_NOTAS'
    | 'RETIRO_CURSO'
    | 'CAMBIO_SECCION';

export type EstadoSolicitud = 'PENDIENTE' | 'EN_REVISION' | 'APROBADA' | 'RECHAZADA';

export type PrioridadSolicitud = 'BAJA' | 'MEDIA' | 'ALTA';

/* LISTADO TIPOS*/
export const TIPOS_SOLICITUD: TipoSolicitud[] = [
    'CONSTANCIA_MATRICULA',
    'CONSTANCIA_NOTAS',
    'RETIRO_CURSO',
    'CAMBIO_SECCION',
];

export interface Solicitud {
    id: number;
    tipo: TipoSolicitud;
    asunto: string;
    descripcion: string;
    estado: EstadoSolicitud;
    prioridad: PrioridadSolicitud;
    estudiante: Estudiante;
    fecha: string;
    observacion?: string;
}

/*DATOS  QUE LLEGA EL SUUARIO*/
export interface NuevaSolicitud {
    tipo: TipoSolicitud;
    asunto: string;
    descripcion: string;
    prioridad: PrioridadSolicitud;
    estudiante: Estudiante;
}

