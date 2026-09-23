# Actividad 2: componentes, datos y tipado

## ¿Qué se implementó?

La Actividad 2 organiza la interfaz de solicitudes académicas en varias partes para que cada una tenga una función clara. La aplicación muestra un encabezado, una lista de solicitudes y una tarjeta individual para cada solicitud. También permite seleccionar una solicitud y mostrar su título como detalle.

## Componentes y responsabilidades

- **HeaderComponent:** muestra el título y el subtítulo de la aplicación.
- **SolicitudListaComponent:** obtiene las solicitudes, organiza su presentación y guarda cuál fue seleccionada.
- **SolicitudCardComponent:** muestra los datos de una solicitud y contiene el botón Ver detalle.
- **AppModule:** registra los componentes para que Angular pueda utilizarlos dentro de la aplicación.

Esta separación evita concentrar toda la interfaz y su comportamiento en un único componente. Cada parte se puede entender y mantener según la tarea que realiza.

## Estructura de los datos

Todas las solicitudes siguen una misma estructura. Cada una tiene un identificador, título, descripción, nombre del estudiante, estado y fecha. Los estados permitidos son Pendiente, En proceso y Atendida.

Esta estructura común se define en el modelo `Solicitud`. El servicio y los componentes trabajan con solicitudes que siguen ese modelo, por lo que manejan los mismos campos de forma coherente.

## Cómo se muestran las solicitudes

El `SolicitudService` mantiene las solicitudes de ejemplo y se las entrega al componente de lista. También cuenta con una operación para agregar una solicitud: recibe el título, el nombre del estudiante y la descripción; luego asigna un identificador, establece el estado inicial como Pendiente, registra la fecha y añade el nuevo elemento a la lista.

Para la consulta, `SolicitudListaComponent` recibe `SolicitudService` al crearse y obtiene las solicitudes cuando se inicia.

Después, la plantilla de la lista usa `*ngFor` para generar una tarjeta por cada solicitud. Usa `*ngIf` para mostrar la lista cuando hay datos, o un mensaje cuando está vacía. También presenta el total de solicitudes y el título del detalle seleccionado.

La lista envía los datos de cada solicitud a su tarjeta. Al pulsar Ver detalle, la tarjeta avisa cuál fue seleccionada y la lista muestra esa selección. Así, la tarjeta presenta la información individual y la lista controla la vista general.

## ¿Qué aporta el tipado?

El tipado funciona como una guía para indicar qué información debe tener una solicitud. Ayuda a detectar si falta un dato o si se intenta usar un estado no permitido. También mantiene la misma estructura cuando los datos pasan del servicio a la lista y de la lista a cada tarjeta.

En resumen, se aplicaron componentes, módulo, data binding, directivas y un servicio inyectado. Se eligió esta organización para separar la presentación de los datos y facilitar la comprensión y el mantenimiento del proyecto.

