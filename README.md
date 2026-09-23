# README — Evaluación

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** [PA1]  
> **Equipo:** [NOMBRE O NÚMERO]  

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Valeria Ravina Pérez | Desarrollador Actividad 1 | Modelos tipados, funciones con ES6+, datos con async/await, demo y documentación |
| Alejandro Daniel Quispe Nieto | Desarrollador actividad 2 parte 1 | Crear los componetes bindig y directivas Angular para listar la información |
| Rodrigo Paredes | Desarrollador Actividad 4 | Lista de los usuarios mediante un APIs REST |
| Alejandro Josue Chero | Desarrollador actividad 2 parte 2 | SolicitudService y inyección de dependencias, explicando cómo se gestionan y proporcionan los datos a los componentes. |
| Ian Palmieri | Desarrollador Actividad 3 | Formulario reactivo de solicitudes (ReactiveFormsModule, validaciones) y navegación con Angular Router (`/solicitudes`, `/nueva-solicitud`) |

## 2. Descripción y objetivo

**Problema:**  
La consulta de solicitudes académicas necesita una interfaz organizada que permita ver las solicitudes registradas y consultar sus detalles, manteniendo separadas la presentación de la información y la gestión de los datos.

**Objetivo:**  
Desarrollar una aplicación web con Angular 16 y TypeScript que sirva como base para gestionar solicitudes académicas y aplicar los contenidos de programación web evaluados en la PA1.

**Solución desarrollada:**  
Se construyó una aplicación Angular con TypeScript, organizada en un módulo base con modelos tipados (Actividad 1), componentes con formularios reactivos y rutas (Actividades 2 y 3), y consumo de una API REST (Actividad 4).

## 3. Cómo ejecutar o revisar

```bash
npm install
npm start
```

**Pasos de revisión:**
1. Clonar el repositorio y abrir una terminal en la carpeta del proyecto.
2. Ejecutar `npm install` para instalar las dependencias.
3. Ejecutar `npm start` y esperar el mensaje de compilación correcta del servidor Angular.
4. Abrir `http://localhost:4200` en el navegador.
5. Revisar la lista de solicitudes, pulsar **Ver detalle** y comprobar que cambia la solicitud seleccionada. Si hay conexión a Internet, también se mostrarán los datos de prueba consultados desde JSONPlaceholder.
6. Para comprobar la compilación de producción, detener el servidor y ejecutar `npm run build`.

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Agregar aquí capturas, resultados, pruebas o enlaces que demuestren el funcionamiento.

- Actividad 1 (tipado y ES6+): `docs/tipado.md`
- Actividad 3 (formulario reactivo y Router): `docs/actividad3-evidencias/actividad3.md`
- Actividad 4 (consumo de API REST): `docs/actividad4-evidencias/tipado.md`
- Actividad 2 (Arquitectura de componentes Angular): `docs/actividad2-evidencias/tipado.md`

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Valeria Ravina Pérez | Alta | Alta | Alta | Sí | Commits de la rama `feature/actividad-1-tipado` y Pull Request #1 |
| [Alejandro Daniel Quispe Nieto] | [Alta] | [Alta] | [Alta] | [Sí] | [`docs/actividad2-evidencias/tipado.md`] |
| Rodrigo Paredes | Alta | [Alta | [Alta | Sí | Commits `Actividad 4` ver `docs/actividad4-evidencias/tipado.md` |
| Alejandro Josue Chero | Alta | Alta | Alta | Sí | `docs/evidencias/actividad-2/Ver detalles-Reserva.png` |
| Ian Palmieri | Alta | Sí | Sí | Sí | Actividad 3: `SolicitudFormComponent`, rutas `/solicitudes` y `/nueva-solicitud`, ver `docs/actividad3-evidencias/actividad3.md` |

## 6. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

- Definir los tipos y modelos antes de construir los componentes ayudó a que el resto del equipo trabajara con datos consistentes y evitó errores de tipado en tiempo de desarrollo.
- Separar la lógica en módulos (modelos, componentes, servicios) facilitó que cada integrante avanzara en su actividad sin depender directamente del código de los demás.
- El uso de TypeScript con tipado estricto permitió detectar errores antes de ejecutar la aplicación, lo que redujo el tiempo dedicado a depurar.
- El uso de un servicio para gestionar las solicitudes permitió separar los datos de la parte visual de la aplicación. Además, la inyección de dependencias facilitó que el componente pudiera utilizar el servicio de forma organizada, haciendo que el código sea más fácil de mantener y reutilizar.
- La API REST nos permite el uso de servicios y poder realizar peticiones web de forma global, que ayudo a facilitar la integración y comunicación de datos externos en la aplicacion.


---

**Última actualización:** [22/09/2026]
