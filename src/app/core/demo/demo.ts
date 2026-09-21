import { obtenerSolicitudes } from '../data/solicitudes.data';
import { describirSolicitud, filtrarPorEstado } from '../utils/solicitud.utils';

const ejecutarDemo = async () => {
  const solicitudes = await obtenerSolicitudes();

  for (let i = 0; i < solicitudes.length; i++) {
    console.log(describirSolicitud(solicitudes[i]));
  }

  const pendientes = filtrarPorEstado(solicitudes, 'PENDIENTE');
  console.log(`Pendientes: ${pendientes.length}`);
};

ejecutarDemo();