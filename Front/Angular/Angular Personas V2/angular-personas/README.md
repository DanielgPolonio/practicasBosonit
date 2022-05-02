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

- Empleado: Módulo para la interacción con empleados. Consiste en una tabla en la que se nos permitirá visualizar, eliminar, modificar y añadir nuevos empleados. La visualización se hará mediante la llamada a una tabla genérica a la que le enviaremos un .json previamente obtenido en una petición a back.

## Configuración de ESlint (Migrate from TSLint to ESLint) y prettier



Con el lanzamiento de Angular 11, se anunció que TSlint (obsoleto en 2019) fue reemplazado por ESLint y existe una solución de terceros que le permite migrar fácilmente de TSLint a ESLint mediante el uso de esquemas.
Antes de ejecutar el proceso de migración, debe instalar los esquemas convert-tslint-to-eslint. Para hacer esto, simplemente ejecute el siguiente comando dentro de la raíz del proyecto Angular que desea migrar:
```
ng add @angular-eslint/schematics
```
Luego, debe iniciar el proceso de migración con el comando:
```
ng g @angular-eslint/schematics:convert-tslint-to-eslint your_project_name
```
El comando anterior analizará el archivo tslint.json e intentará hacer coincidir las reglas de TSLint con las reglas de ESLint creando un nuevo archivo .eslintrc.json. El comando también se encargará de eliminar el archivo tslint.json y eliminar las dependencias de tslint y codelyzer. Una vez que se complete el proceso de migración, su aplicación estará lista para usar ESLint.
Configurar ESLint y Prettier
El verdadero poder de ESLint radica en sus posibilidades de personalización.
A través del archivo .eslintrc.json es posible utilizar configuraciones “compartidas” o establecer reglas de linting personalizadas. Las reglas, una vez establecidas, nos permitirán mostrar advertencias si el código no respeta las reglas establecidas.
Antes de echar un vistazo al archivo de configuración que recomiendo en este artículo, terminemos con la instalación de Prettier, que se encargará de formatear el código según las reglas establecidas dentro del archivo .prettierrc.json.
```
npm install prettier eslint-plugin-prettier eslint-config-prettier --save-dev
```
Este comando, además de instalar Prettier, también se encarga de la instalación de dos paquetes que deshabilitan algunas reglas de ESLint para evitar conflictos con Prettier. Una vez finalizada la instalación, estamos listos para configurar las reglas de linting y formateo. Cree el archivo .prettierrc.json dentro de la raíz del proyecto con la siguiente configuración:
```
{
"singleQuote": true,
"trailingComma": "none",
"endOfLine": "auto"
}
```
Las partes a las que me gustaría prestar atención son: extensiones y reglas. El primero declara las reglas “compartidas” gracias a la instalación de paquetes de terceros, mientras que el segundo muestra las reglas personalizadas. La única regla que me sentí obligado a agregar a la lista es ordenar las importaciones, lo que provoca un error de tiempo de compilación si los módulos ES6 importados no se ordenan correctamente. Tenga en cuenta que el orden en que se declaran los complementos y las reglas es importante. Aquí hay una lista completa de las reglas de configuración de ESLint. Finalmente, si desea ignorar la pelusa de algunos archivos, cree el archivo .eslintignore dentro de la raíz del proyecto:
```
{
"root": true,
"ignorePatterns": [
"projects/**/*"
],
"overrides": [
{
"files": [
"*.ts"
],
"parserOptions": {
"project": [
"tsconfig.json",
"e2e/tsconfig.json"
],
"createDefaultProgram": true
},
"extends": [
"eslint:recommended",
"plugin:@angular-eslint/recommended",
"plugin:@angular-eslint/template/process-inline-templates",
"plugin:prettier/recommended"
],
"rules": {
"@angular-eslint/component-selector": [
"error",
{
"prefix": "app",
"style": "kebab-case",
"type": "element"
}
],
"@angular-eslint/directive-selector": [
"error",
{
"prefix": "app",
"style": "camelCase",
"type": "attribute"
}
],
"sort-imports": [
"error",
{
"ignoreCase": false,
"ignoreDeclarationSort": false,
"ignoreMemberSort": false,
"memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
"allowSeparatedGroups": false
}
]
}
},
{
"files": [
"*.html"
],
"extends": [
"plugin:@angular-eslint/template/recommended"
],
"rules": {}
}
]
}
```
Las partes a las que me gustaría prestar atención son: extensiones y reglas.
El primero declara las reglas “compartidas” gracias a la instalación de paquetes de terceros, mientras que el segundo muestra las reglas personalizadas.
La única regla que me sentí obligado a agregar a la lista es ordenar las importaciones, lo que provoca un error de tiempo de compilación si los módulos ES6 importados no se ordenan correctamente. Tenga en cuenta que el orden en que se declaran los complementos y las reglas es importante. Aquí hay una lista completa de las reglas de configuración de ESLint.
Finalmente, si desea ignorar la pelusa de algunos archivos, cree el archivo .eslintignore dentro de la raíz del proyecto:
```
package.json
package-lock.json
dist
e2e/**
karma.conf.js
commitlint.config.js
```
Antes de concluir, agreguemos en el package.json los scripts para ejecutar el linting y formateo del código desde la línea de comando:
```
...
"scripts": {
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"test": "ng test",
"lint": "npx eslint 'src/**/*.{js,jsx,ts,tsx,html,css,scss}' --quiet --fix",
"format": "npx prettier 'src/**/*.{js,jsx,ts,tsx,html,css,scss}' --write",
"e2e": "ng e2e"
}
...
```

## Componentes genéricos

- Input: Componente genérico para la optimización a la hora de crear formularios. El objetivo es tener los campos de formulario definidos con anterioridad en un fichero .json y enviarlo a un componente input padre, que se encargará de crear los campos de formulario mediante llamadas a inputs hijo. De esta forma, optimizaremos los componentes reduciendo los formularios a una llamada al parent, pasándole el fichero .json.

Llamamos al input parent en el componente en el que deseamos crear el formulario y mediante el *ngFor recorremos todos los objetos, haciendo una llamada al parent y enviandole el campo de formulario con sus características.

Al recibir el objeto, mediante ngSwitch, comprobará cual es el type del campo de formulario, si coincide, hará una llamada al input hijo y le mandará el objeto json recibido.

Los datos serán recogidos del formulario mediante el uso de [(ngModel)]. En cada .ts de los componentes genéricos crearemos model y property, y le asignaremos el valor de config.modelProperty.model/property.

Previamente, en el componente en el que deseamos usar los inputs, crearemos la función fillInput(inputs, model):

Con la que asignamos como property el nombre del input y como model el tipo de dato que queremos, por ejemplo, un Empleado. 
this.fillInput(ficheroJson, tipo de modelo);
Con esto, rellenaremos los modelProperty que luego serán usados en los inputs genéricos.

El fichero .ts solo tendrá un @Input para recoger el objeto json: 
@Input() config:InputConfig; siendo InputConfig una interfaz creada para los inputs, llamada input.config.ts.

Accederemos a los parámetros mediante this.config.x



- Botón: Componente genérico para la optimización a la hora de crear y usar botones. El funcionamiento es parecido al de "Input genérico", se definen los botones en un fichero .json y se mandará a un componente llamado button, en la carpeta shared. Una vez reciba el fichero .json, se encargará de construir el botón con los parámetros que se hayan definido previamente y lo devolverá al componente desde el que se le ha llamado.

el componente button tendrá también un evento (click) llamado onClick($event) que usaremos para crear un evento genérico que mandaremos al componente deseado mediante un 
@Output() de tipo EventEmitter llamado isClickedButton, que emitirá un evento y será recogido por el componente que lo necesite.

En el .ts del componente podremos recoger ese evento y crear nuestra propia función que utilizaremos como queramos.

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
Clase abstracta que contendrá el método populate() al cual, mediante el binding realizado con ngModel entre los inputs y el componente, se le pasarán una serie de parámetros, creará un objeto del tipo deseado, y lo devolverá al componente que lo haya pedido.

Creamos un nuevo empleado y rellenamos una interfaz de tipo empleado, por ejemplo. A continuación, llamaremos al método crear empleado y le pasaremos los params.

Este método, que pertenece a la clase Employee, extiende de baseModel, en él, haremos una llamada a populate() y le pasaremos los params:
employee.populate(params);

El método populate de la clase baseModel recibe los parámetros y, después de comprobar que los parámetros existan, asignará a cada uno de los campos del objeto, su parámetro correspondiente, y devolverá el objeto creado. 

Una vez el método populate haya terminado, tendremos un objeto del tipo que hayamos definido previamente, en este caso, de tipo Employee.
