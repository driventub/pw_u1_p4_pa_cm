# Para estuelemr

## Internet

- conjunto de paginas que estan alojadas en la red y son accesibles a nivel universal
- w3c: consorcium
- soap, restful para las api
- paginas estaticas: paginas web que no tienen un comportamiento en el cual generan una funcionalidad web transaccional

- pagina dinamica: pagina web que ejecutan transacciones

## HTML

- Codificar: obtener un mensaje y transformarlo no busca seguridad

- HTML: estructura y contenido, se define a travez de elementos
- un elemento más común es: el label, input button, imagenes
- se conforma de tres partes:
  1. una etiqueta de apertura
  2. contenido del elemento
  3. etiqueta de cierre
- la nomenclatura para declarar una etiqueta es el nombre del elemento: `<label>` y para cerrar: `</label>`
- el contenido es el texto puro ya que no tiene un estándar, se basa en un conjunto de items (otros elementos html. )
- las etiquetas de apertura están conformados por atributos conformados por 2 partes:
  1.  clave: nombre del atributo
  2.  valor: características del atributo como la ubicación.
- Encriptacion se basa en un algoritmo matematico
- Excepcion existen elementos que no requieren etiqueta de cierre, elementos que no tienen contenido

- Fuentes de estudio HTML: https://www.w3schools.com/html/, https://developer.mozilla.org/es/docs/Web/HTML

- El estandar de la estructura del html es para mejorar las busquedas de Google
- Indexable, buscable, encontrable
- cuando se maneja una correctta estructura en la pagina we4b, si no pusiera este lenguaje y se buscara terminos en ingles no la podria tomar en cuenta.
- closed computing ayuda a encontrar sin impedimentos del lenguaje busquedas organicas y por pago.
- si se hace un buen diseño de la pagina web no hace falta pagar y la pagina sera mas indexable.
- SEO (search engine optmization, estrategia organica), SEM(Search engine marketing, estrategia pagada)
- para asegurar que nuestra pagina sea indexable deberá tener mejos estructura y diseño.
  ![SEO vs SEM](https://pedestalsearch.com/wp-content/uploads/2013/03/seo-v-sem-min.png)

- el form me permite crear etiquetas dinamicas

- las barras de navegacion deben ser vistas como una lista de opciones que vienen desde una DB, el nav siempre tiene tipo lista.

- el nav tiene una lista de opciones proporcionadopor el backend

## Eliminar las credenciales

1.  Eliminar en Administracion de credencials, poner Quitar

2.  para clonar github

        git clone url

## Taller 4: CSS

debe tener almenos 3 elementos

- Html (se complementa con css para organizar la estructura)
- CSS (complementa con los estilos)
- JavaScript

- CSS 3:

tenemos 2 alternativas para programar con CSS3

-                Facil   Correcto
- en linea (3) (1)
- css internos (2) (2)
- css externos (1) (3)

- los archivos **externos** son creados fuera de la pagina web y se deben ubicar en la carpeta css. Se pueden reutilizar en todo el proyecto.
- cuando se ponen los estilos en **línea** (a nivel de elemento) tendria que volverse a programar.
- los archivos **internos** se pueden reutilizar dentro del mismo archivo.

### Selectores

- Los selectores son: elementos elegibles para el estilo.

- solo en internos y externos se aplica el concepto de selectores.

-Estructura:

```css
selector {
  propiedad: valor; //Declaracion
  propiedad: valor; //Otra Declaracion
  color: red; // ejemplo
}
```

- Existen 6 tipos de lselectores:

- 1 Universales (no muy usado pero aplica a todos los elementos).
- 2 Por tipo de elemento (aplica para todos los elementos del mismo tipo por ejemplo a todos los botones).
- 3 Selector clase (se pueden clasificar y aplicarlos a esos elementos clasificados por ejemplo botones de borrar).
- 4 Selector por ID (me permite hacer elegibles a los elemtos por un id y aplicarles el estilo).
- 5 Selector por atributo (se aplican a los elementos dependiendo del atributo por ejemplo usar un estilo a todos los elementos que tengan el atributo src,img,png).

#### Tiene dos variaciones:

- 1 me dice un tipo de selector, el atributo que contiene un elemento.

- 2 por tipo de atributo y que conmtenga un valor.
- No es parametrizable

- 6 Selector de pseudo-Clase (Se lo utiliza para eventos ejemplo, cuando el mouse pasa encima de un elemento y el estilo de dicho elemento cambiara).

### Taller 5:

- para seleccionar una clase usamos "."
- para seleccionar un evento usamos ":"
- para seleccionar un id usamos "#"

- cuando usamos un atributo dentro del elemento lo llamamos con "[]"
- ejemplo: "a[href*="es"]"
- for: para quien construyo este elemento

#### Manera externa de llamar css

- se utilizar archivos externos de extensión: .css

### Taller 6

- DOM: Document Object Model
  ![Arbol de elementos html](img/dom.gif)

- cuando no aplicamos ningun estilo a nuestros elementos html, la distribucion suele ser uno debajo de otro(excepciones: label, input)

- `display` : para decir a un elemento como se va a ubicar

- el espacio entre elementos es margen
- contenido lo que se visualiza
- borde: el espacio imaginario que rodea al elemento
- el espacio entre el contenido y el borde padding

         margin: 1px 2px 3px 4px;

- orientacion de elementos `text-align`

- elemento que nos permite agrupar elementos html

### Taller 7

- el `float : left` va a mandar todo el contenido a la izquierda, excepto del estilo donde se esta llamando a llamar a la propiedad

### JavaScript Intro

- Las primeras paginas eran estaticas, client side
- Desde hace 17 años es posible editar con JavaScript backend y frontend, repotenciado en frameworks
- Node.js : runtime para ejectuar codigo en el backend
- Ultima version de Javascript 2021
- Tipos de declaracion :

  - En linea: a nivel de elemento
  - Internas: dentro del documento html
  - Externas: afuera del documento html

- En su mayoria un boton ejecuta Javascript(evento)
- Los eventos empiezan con la palabra `on` dentro de un elemento y se van a declarar como atributos.

### Taller 9

- dependiendo del contexto de cada declaracion a pesar que las comillas simples y dobles son similares, no se aplica siempre

- cuando usamos js usamos funciones quye representan a los metodos de java.

- La sintaxis en un metodo normal es:

```javascript
function [nombre de la funcion] (args1,args2){
  // return
  document.getElementById();
}


```

- no se especifica el tipo de dato a tratar.
- no es necesario especificart el tipo de dato de salida ni entrada.

### Taller 10

- Para insertar, se deben insertar con todo el codigo HTML
- Usar lambdas en frameworks JS

Tipos de variables Javascript

- `var` (no es comunmente utilizado)
- `const`
- `let`

```javascript
var variable1 = "Nombre";
var variable = 420;

let variable3 = "Nombre";
let variable4 = 8;

const variable6 = "Nombre";
const variable5 = 99;
// Declaracion de arreglos
const elemsSemana = ["Lunes", "Martes", "Miercoles"];
console.log(elemsSemana);
console.log(elemsSemana[0]);
elemsSemana.push("Jueves");
elemsSemana.push("Viernes");

console.log(elemsSemana);
```

- `push` para asignar un dato al final del array

- Declaracion de Objetos

```javascript
const persona = {
  elems: "algo",
  e: 22,
};
```

- si con `const` se cambia posicion, contenido del arreglo si vale, porque esta cambiando el contenido, no el arreglo. Pero si se trata de cambiar de un vector a otro, `const` si sera detectado

- Desestructuracion de Arreglos: descomposicion de un elemento JS(arreglos y objetos)

``` javascript
const [elem1,elem2,elem3] = elems

```


probando algo