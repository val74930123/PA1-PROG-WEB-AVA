export interface Solicitud {
    id: number;
    titulo: string;
    descripcion: string;
    estudiante: string;
    estado: 'Pendiente' | 'En proceso' | 'Atendida';
    fecha: string;
}
