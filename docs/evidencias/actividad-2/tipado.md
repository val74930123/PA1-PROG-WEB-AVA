# Tipado de las solicitudes - Actividad 2

## ¿Qué significa tipar una solicitud?

En esta aplicación, una solicitud representa un pedido que realiza un estudiante, por ejemplo, una constancia de estudios o una reserva de laboratorio. Para que la información se muestre siempre de forma ordenada, todas las solicitudes siguen la misma estructura.

Cada solicitud incluye:

- Un número que permite distinguirla de las demás.
- Un título y una descripción para explicar qué se está solicitando.
- El nombre del estudiante que la presenta.
- Un estado para indicar en qué etapa se encuentra: Pendiente, En proceso o Atendida.
- La fecha en que se registró.

## ¿Cómo se usa en la aplicación?

El servicio mantiene las solicitudes de ejemplo y se las entrega a la lista cuando esta se inicia. La lista utiliza esa información para mostrar una tarjeta por cada solicitud. Todas las tarjetas reciben los mismos tipos de datos, aunque cada una presenta una solicitud diferente.

Cuando se pulsa ver detalle , la tarjeta comunica cuál solicitud se eligió y la lista muestra su título en la sección de detalle. De esta manera, la información conserva la misma estructura desde que sale del servicio hasta que aparece en la pantalla.

## ¿Por qué es útil?

El tipado funciona como una guía compartida para las partes de la aplicación: indica qué datos debe tener una solicitud y ayuda a detectar errores, como olvidar un campo o escribir un estado distinto de los permitidos. También facilita mantener el proyecto, porque si se cambia la estructura de una solicitud, se puede identificar qué partes deben actualizarse.

En resumen, el modelo define la información de cada solicitud, el servicio la proporciona y los componentes la muestran e intercambian. Cada parte tiene una responsabilidad clara, pero todas trabajan con la misma estructura.
