# Para estudiar

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

1. Eliminar en Administracion de credencials, poner Quitar

2. para clonar github

        git clone url

## Taller 4: CSS

debe tener almenos 3 elementos 

- Html (se complementa con css para organizar la estructura)
- CSS (complementa con los estilos)
- JavaScript

- CSS 3:

tenemos 2 alternativas para programar con CSS3
-                Facil   Correcto
- en linea        (3)       (1)
- css internos    (2)       (2)
- css externos    (1)       (3)

- los archivos __externos__ son creados fuera de la pagina web y se deben ubicar en la carpeta css. Se pueden reutilizar en todo el proyecto.
- cuando se ponen los estilos en __línea__ (a nivel de elemento) tendria que volverse a programar. 
- los archivos __internos__ se pueden reutilizar dentro del mismo archivo.

### Selectores

- Los selectores son: elementos elegibles para el estilo.  

- solo en internos y externos se aplica el concepto de selectores.

-Esctructura: 

        selector{
          propiedad : valor;  //Declaracion
          propiedad : valor;  //Otra Declaracion
          color :red; // ejemplo
          
        }

- Existen 6 tipos de lselectores:

- 1 Universales (no muy usado pero aplica a todos los elementos).
- 2 Por tipo de elemento (aplica para todos los elementos del mismo tipo por ejemplo a todos los botones).
- 3 Selector clase (se pueden clasificar y aplicarlos a esos elementos clasificados por ejemplo botones de borrar).
- 4 Selector por ID (me permite hacer elegibles a los elemtos por un id y aplicarles el estilo).
- 5 Selector por atributo (se aplican a los elementos dependiendo del atributo por ejemplo usar un estilo a todos los elementos que tengan el atributo src,img,png).
- 6 Selector de pseudo-Clase (Se lo utiliza para eventos ejemplo, cuando el mouse pasa encima de un elemento y el estilo de dicho elemento cambiara).