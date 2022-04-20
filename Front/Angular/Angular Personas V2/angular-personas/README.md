# Frontend de yiyIT (Crmjaenangular)

El proyecto está generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Entorno de desarrollo

Ejecuta `npm run start` para ejecutar el entorno de desarrollo en local. Carga la ruta `http://localhost:4200/` en tu navegador y te redigirá a la página de Login.
Por defecto, ante cualquier modificación en el código se recargará automaticamente.

## GIT

Para GIT usaremos Git-Flow:
-   Desarrollo de un componente/funcionalidad nueva:  feature/[usuario de Bosonit]-[Título]  (Sale desde Develop)
-   Resolución de bugs: :  hotfix/[usuario de Bosonit]-[Título]  (Sale desde Master)

*Cada commit constará con un comentario se realizará en ingles donde se incluirá una breve descripción de lo realizado.

## Estructura del proyecto
- core: aqui se incluye los elementos fijos del sistema como puede ser el menú.
- features: aqui incluiremos desarrollos como tal, es decir, cada una de las secciones (empleados, perfil...)
- shared: aqui incluiremos los elementos genéricos (componentes, servicios...), de tal manera que tengamos tablas, botones o elementos empaquetados puedan reutilizarse en todo el proyecto.

## SCSS

Para los estilos vamos a utilizar la metodología BEM (Block Element Modifier):
-   El bloque es un contenedor o contexto donde el elemento se encuentra presente. Piensa como si fueran partes estructurales de código más grandes. Puede que tengas un encabezado, pie de página, una barra lateral y un área de contenido principal; cada uno de estos sería considerado como un bloque. 
-   El elemento es una pieza de un bloque. El bloque es el todo y los elementos son las piezas. Cada elemento se escribe luego del bloque conectado por dos barras bajas.
-   Modificadores: Cuando nombras una clase, la intención es ayudar a que ese elemento pueda ser repetido para que no tengas que escribir nuevas clases en otras áreas del sitio si los elementos de estilo son los mismos

Ejemplo:
```
.block--modifier {}
.block__element--modifier {}

.header__navigation--secondary {}

.header{
    &__navigation{
        &--primary
        &--secondary
    }
}
```
Las modificaciones de los componentes de primeng se harán en el fichero _extensions.scss

## Componentes

- Login: Componente para la página de login. Está compuesto por la combinación de "Login" y "Forgot-password" en un solo componente. Su función es servir como página inicial para que el usuario se loguee o pida una nueva contraseña. 
    - Login está compuesto por dos input, uno de tipo text para el usuario y otro de tipo password para la contraseña. Una vez el usuario introduce sus datos, mediante el método "login()" se hará una petición a back para comprobar si son correctos, en caso afirmativo, se le llevará a la página home. En caso contrario, se mostrará un mensaje de error. También hay un enlace con el texto "¿Ha olvidado su contraseña?" que cambiará el componente Login por el componente forgot-password al hacerle clic.

    - Forgot-password está compuesto por un input de tipo e-mail para que el usuario introduzca su email y un button de tipo submit que activará el método forgorPassword() con el que estableceremos una conexión con back para hacer todo el proceso de reenvio de contraseña al correo indicado, en caso de que el correo exista en la BD. Al igual que en el componente Login, habrá un enlace con el texto "Regresar a inicio de sesión." que nos llevará de vuelta al componente Login.

- nav-side-menu: Componente del menú vertical izquierdo. Está compuesto por un tabmenu de PrimeNG cuando está expandido y un tieredmenu de PrimeNG cuando está colapsado. El tipo de menú se visualizará dependiendo del estado de la variable booleana showMenu, que cambiará su estado al hacer clic en el icono hamburguesa del menú horizontal.

- menubar: Componente del menú horizontal. Está compuesto por un icono hamburguesa cuya función es expandir o colapsar el menú vertical izquierdo, un botón para notificaciones, mensajes, aplicaciones y un menubar de PrimeNG que nos permitirá editar nuestro perfil, desconectarnos...

## Componentes genéricos

- Input: Componente genérico para la optimización a la hora de crear formularios. El objetivo es tener los campos de formulario definidos con anterioridad en un fichero .json y enviarlo a un componente input padre, que se encargará de crear los campos de formulario mediante llamadas a inputs hijo. De esta forma, optimizaremos los componentes reduciendo los formularios a una llamada al parent, pasándole el fichero .json.

Ejemplo:
Fichero .json:

[{
    "type": "text",
    "modelProperty": {},
    "props": {
      "label": "Nombre: ",
      "name": "Username",
      "required": true,
      "disabled": false,
      "placeholder": "Nombre...",
      "maxlength": 250
    }
  },
  {
    "type": "text",
    "modelProperty": {},
    "props": {
      "label": "Apellido: ",
      "name": "Lastname",
      "required": false,
      "disabled": false,
      "placeholder": "Apellido...",
      "maxlength": 250
    }l
  }
]

Llamamos al input parent en el componente en el que deseamos crear el formulario:
<ng-container *ngFor="let input of inputJson">
    <app-input-parent [inputs]="input"></app-input-parent>
</ng-container>

Mediante el *ngFor recorremos todos los objetos, haciendo una llamada al parent y enviandole el campo de formulario con sus características.

El input parent tendrá la siguiente estructura:
 <ng-container [ngSwitch]="inputs.type">
    <ng-container *ngSwitchCase="'text'">
      <app-input-text [config]="inputs"></app-input-text>
    </ng-container>
    <ng-container *ngSwitchCase="'number'">
      <app-input-number [config]="inputs"></app-input-number>
    </ng-container>
    <ng-container *ngSwitchCase="'date'">
      <app-input-date [config]="inputs"></app-input-date>
    </ng-container>
    ...

Al recibir el objeto, mediante ngSwitch, comprobará cual es el type del campo de formulario, si coincide, hará una llamada al input hijo y le mandará el objeto json recibido.

Estructura de input-text genérico:
<div class="inputLine">
  <label class="inputLine--label">{{this.config.props.label}}<span class="inputLine--required" *ngIf="this.config.props.required">*</span></label>
  <input type="text" name="{{this.config.props.name}}" (keypress)="onlyLetters($event)" [(ngModel)]="model[property]" class="inputLine--field" [placeholder]="this.config.props.placeholder" pInputText>
</div>

Los datos serán recogidos del formulario mediante el uso de [(ngModel)]. En cada .ts de los componentes genéricos crearemos model y property, y le asignaremos el valor de config.modelProperty.model/property.

Previamente, en el componente en el que deseamos usar los inputs, crearemos la función fillInput(inputs, model):

  public fillInput(inputs: any[], model: any) {
    inputs.forEach(input => {
      if (input.modelProperty) {
        input.modelProperty = {
          property: input.props.name,
          model
        }
      }
    })
  }

  Con la que asignamos como property el nombre del input y como model el tipo de dato que queremos, por ejemplo, un Empleado. 
  this.fillInput(ficheroJson, tipo de modelo);
  Con esto, rellenaremos los modelProperty que luego serán usados en los inputs genéricos.

El fichero .ts solo tendrá un @Input para recoger el objeto json: 
  @Input() config:InputConfig; siendo InputConfig una interfaz creada para los inputs, llamada input.config.ts.

Accederemos a los parámetros mediante this.config.x



- Botón: Componente genérico para la optimización a la hora de crear y usar botones. El funcionamiento es parecido al de "Input genérico", se definen los botones en un fichero .json y se mandará a un componente llamado button, en la carpeta shared. Una vez reciba el fichero .json, se encargará de construir el botón con los parámetros que se hayan definido previamente y lo devolverá al componente desde el que se le ha llamado. La estructura del fichero .json es la siguiente:

[
  {
    "label": "Púlsame",
    "form":"formTest",
    "name": "pulsar",
    "disabled": false,
    "class": ""
  }
]

la estructura de button.component.html será la siguiente:
<button pButton class="{{buttonJson.class}}" label="{{buttonJson.label}}" 
name="{{buttonJson.name}}" id="{{buttonJson.name}}" (click)="onClick($event)"></button>

el componente button tendrá también un evento (click) llamado onClick($event) que usaremos para crear un evento genérico que mandaremos al componente deseado mediante un 
@Output().
El evento estará definido en button.component.ts de la siguiente forma:

@Output() isClickedButton:EventEmitter<any> = new EventEmitter<any>(); - Creación de Output tipo EventEmitter.

onClick(event : Event){
   this.isClickedButton.emit(event); - Función onClick para emitir el evento en el componente deseado.
}

Una vez definido el evento en button, lo llamamos desde el componente que necesita el botón, por ejemplo:

<app-button [buttonJson]="button" (isClickedButton)="evento($event)"></app-button>

y en el .ts del componente:

evento(event:Event){
    console.log("Esto es un evento, ", event);
  }	

- table: Componente, definido en el modulo shared, para generar una tabla generica. Está compuesto de dos input, que deben de ser declarados y rellenados desde el componente padre donde se quiera utilizar. Estos dos input se basan en las columnas y filas(datos) de la tabla que se quieran mostrar.
    * Input de columnas: Se define tanto como en el padre como en el hijo como ITableColumn, teniendo este contemplados dos campos: {name y id}
    * Input de filas o datos: Se define el tipo de dato que es (interfaces) en el padre y se declara como any en el hijo.
Dentro del html del componente se recorre las columnas para mostrarlas, y despues se hace un doble recorrido de estas columnas de nuevo junto al de los datos o filas.
Es importante saber que el id definido en una columna se utilizara para saber cual es el dato definido en cada fila y poder mostrar éste en la tabla.

## Características

- xng-Breadcrumb: Librería utilizada para crear el Breadcrumb o migas de pan en español. Se utiliza llamando a la etiqueta <xng-breadcrumb separator=">"></xng-breadcrumb>
Por ejemplo, podría mostrar la siguiente estructura si estuviese así creada: Home > Inicio > Formulario inicial. Mediante separator podemos indicar que caracter queremos que haya como separador, en este caso, utilizaremos ">".

- ngx-translate: Librería utilizada para traducir la aplicación a distintos idiomas. Aunque inicialmente solo estará en español, si decidimos añadir otro idioma, inglés, por ejemplo, se debe de poder hacer el cambio rápidamente, por lo que todo el texto plano se sustituirá por etiquetas que hacen referencia a los ficheros json es.json y en.json, donde estarán guardadas las traducciones. En el fichero json estarán guardados por secciones, por ejemplo, login, y dentro, estarán sus objetos:
{
    "login": {
        "user": "Usuario:"
    }
}
En el .html lo llamaremos de la siguiente forma: {{'login.user' | translate}}.

En caso de necesitar llamarlo en el .ts, se haría de la siguiente forma: 

this.translate.get([Objetos json necesarios]).subscribe(translations=>{
Acción a realizar
}


- baseModel.ts (Clase abstracta)
Clase abstracta que contendrá el método populate() al cual se le pasarán una serie de parámetros, creará un objeto del tipo deseado, y lo devolverá al componente que lo haya pedido. por ejemplo:

this.employee=new Employee();
const params: EmployeeInterface = {
  name:  this.employeeForm.controls['username'].value,
  lastName: this.employeeForm.controls['lastname'].value,
  age: this.employeeForm.controls['age'].value,
  birthDate: this.employeeForm.controls['birthdate'].value,
}    
this.employee = this.employee.createEmployee(params);

Creamos un nuevo empleado y rellenamos una interfaz de Empleado con nombre, apellidos, edad y fecha de nacimiento. A continuación, llamaremos al método crear empleado y le pasaremos los params.

Este método, que pertenece a la clase Employee, extiende de baseModel, en él, haremos una llamada a populate() y le pasaremos los params:
employee.populate(params);

El método populate de la clase baseModel está construido de esta forma:

public populate(params: ObjectType): this {
    for (let param of Object.keys(params)) {
      const propDescriptor = Object.getOwnPropertyDescriptor(this, param);
      
      if (propDescriptor !== undefined && propDescriptor?.writable) {
        try {
          //@ts-ignore
          this[param] = params[param];
        } catch (error) {
          console.log("error");
        }
      }
    }
    return this;
  }

Una vez el método populate haya terminado, tendremos un objeto del tipo que hayamos definido previamente, en este caso, de tipo Employee.