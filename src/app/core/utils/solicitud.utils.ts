import { Estudiante, Solicitud, EstadoSolicitud, NuevaSolicitud } from "../models";

export const nombreCompleto = ({ nombres, apellidos }: Estudiante): string => {
  return `${nombres} ${apellidos}`;
};

export const describirSolicitud = (solicitud: Solicitud): string => {
    const {id, asunto, estado, estudiante: { nombres }} = solicitud;
    return `Solicitud #${id}: ${asunto} (${estado}) - ${nombres}`;
};

export const filtrarPorEstado = (solicitudes: Solicitud[], estado: EstadoSolicitud): Solicitud[] =>{
    const resultado: Solicitud[] = [];
    for (const s of solicitudes) {
        if (s.estado === estado) {
            resultado.push(s);
    }
  }
  return resultado;
};

export const crearSolicitud = (datos: NuevaSolicitud, id: number): Solicitud => {
   return {
    id: id,
    tipo: datos.tipo,
    asunto: datos.asunto,
    descripcion: datos.descripcion,
    prioridad: datos.prioridad,
    estudiante: datos.estudiante,
    estado: 'PENDIENTE',
    fecha: new Date().toISOString(),
  };
};