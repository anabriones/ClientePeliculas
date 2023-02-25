# CursoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Ejecutar el programa

Para ejecutar es necesario el comando `npm run start`

## Manual de Usuario  

La página muestra un listado de las distintas películas así como se le permite al usuario buscar películas mediante búsqueda. 

Si el usuario hace login puede modificar, eliminar y añadir películas. 
Un usuario puede registrarse, pero no obtendrá los privilegios hasta hacer login. 

## Servicios  

Los servicios que se han creado son los referentes a los usuarios y a las películas, que son los que acceden a las rutas previamente implementadas en el ServidorRestFull en Nodejs.  

En el caso de las películas, el servicio es entradasService.ts.

## Formularios  

Para probar distintos tipos de formularios se han creado formularios reactivos y formularios normales.

También se hace uso de rutas activas para la obtención de parámetros pasados de un componente a otro.

## Cabeceras

Para que las rutas en la cabecera el Atorizhation se ha creado una cebera previamente que le pasa el token.

 const headers = new HttpHeaders({
      Authorization: 'JWT ' + sessionStorage.getItem('auth_token')
    });
    headers.append('Content-Type', 'application/json');

  De esta forma al intentar por ejemplo eliminar una película, la cabecera tiene ya el valor de token y la direccion se le pasa en el HttpClient  

  this.httpClient.delete<any>(
      `http://localhost:8000/films/${entrada.nombre}`,
      { headers }
    );

    Entrada no devuelve ningún valor en el servidor, por eso se osbserva un any, puesto que lo que puede devolver es un error en el caso de que algo no vaya como lo esperado, tal y como se programó en el ServidorRestFull de NodeJs.

## Componentes

Se ha creado un componente para cada funcionalidad del cliente, los cuales son:
-Añadir Pelicula
-Buscar pelicula
-Eliminar pelicula
-Listado
-Login
-Modificar Pelicula
-Pagina no encontrada
-Registro
