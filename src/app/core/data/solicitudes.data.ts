import { Estudiante, Solicitud } from '../models';

/* Estudiantes ejem*/
const Maria: Estudiante = {
  id: 1,
  codigo: 'U0001',
  nombres: 'Maria',
  apellidos: 'Quispe Rojas',
  correo: 'maria@correo.com',
  carrera: 'Computación',
};

const Luis: Estudiante = {
  id: 2,
  codigo: 'U0002',
  nombres: 'Luis',
  apellidos: 'Ramos Vega',
  correo: 'luis@correo.com',
  carrera: 'Computación',
};

/*Solicitudes ejem*/
export const solicitudesEjemplo: Solicitud[] = [
  {
    id: 1,
    tipo: 'CONSTANCIA_MATRICULA',
    asunto: 'Constancia para beca',
    descripcion: 'La necesito para presentarla en becas.',
    estado: 'PENDIENTE',
    prioridad: 'ALTA',
    estudiante: Maria,
    fecha: '2026-09-15T10:00:00',
  },
  {
    id: 2,
    tipo: 'RETIRO_CURSO',
    asunto: 'Retiro de un curso',
    descripcion: 'Por trabajo no puedo continuar.',
    estado: 'EN_REVISION',
    prioridad: 'MEDIA',
    estudiante: Luis,
    fecha: '2026-09-16T14:30:00',
  },
];

/*simula demora*/
const consultarSolicitudes = (): Promise<Solicitud[]> => {
  return new Promise<Solicitud[]>((resolve) => {
    setTimeout(() => {
      resolve(solicitudesEjemplo);
    }, 1000);
  });
};

export const obtenerSolicitudes = async (): Promise<Solicitud[]> => {
  try {
    const solicitudes = await consultarSolicitudes();
    return solicitudes;
  } catch (error) {
    console.error('Error en la consulta:', error);
    return [];
  }
};