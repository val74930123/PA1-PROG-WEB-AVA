
Actividad 4

Primero configuramos la APP.MODULE.TS, donde importamos el HttpClientModule y luego el HttpClientModule lo agregamos con los demás imports.
 
Luego en la terminal ejecutamos `NPX NG GENERATE SERVICE CORE/SERVICES/API` para crear el SERVICE.
 
En la carpeta `SERVICE`, abrimos el archivo `API.SERVICES.TS`, donde importamos el HttpClient para hacer la petición; luego inyectamos HttpClient en el constructor.
Después creamos un método para consumir la API REST donde traemos 5 usuarios para la prueba.
 
SOLICITUD-LISTA.COMPONENT.TS: Abrimos este archivo para que el servicio cargue los datos a la pantalla.
Hacemos el mismo procedimiento: agregamos el import del API SERVICE y otro dato importante: agregamos al import del componente un NGONINIT para obtener los datos.
Para luego crear una variable nueva donde guarda los datos que vienen de la API, donde inyectamos el servicio en el constructor para que, al usar el componente ngOnInit, consumamos la API REST.
 
Ahora abrimos el archivo SOLICITUD-LISTA.COMPONENT.HTML para poder visualizar los datos de prueba de la API, donde utilizamos el NGFOR para guardar los datos, donde usamos la interpolación para mostrar los nombres y los correos.

Para luego probar con npm start y verificar que todo funcione correctamente.