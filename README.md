# 🧠 DOM Memory Game

En esta actividad crearás un juego de memoria con DOM, HTML y CSS.

## Objetivos

- Manipular el DOM directamente, añadiendo y eliminando elementos.
- Emplear CSS para dar estilos a los elementos de la página.
- Añadir gestores de eventos (event handlers) para interactuar con las acciones que el usuario realice en la página.
- Gestionar los datos del juego de forma ordenada y estructurada, separados de la visualización
- Implementar la lógica de funcionamiento del juego de forma ordenada y estructurada, dividiendo el código en tantas funciones como sea necesario.
- Separar la lógica de funcionamiento del código de la visualización.

## Configuración

- `npm install` para instalar Tailwind CSS.
- `npm start` para inicializar el compilador de Tailwind CSS.
- Abre `index.html` en el navegador con el Live Server de VS Code.

## Requisitos básicos

- Crearemos un juego de memoria con 4 x 4 = 16 cartas (es decir, 8 parejas).
Las cartas estarán mezcladas de forma aleatoria cada vez que comencemos un juego nuevo.
- Las cartas se presentarán boca abajo.
- Hacer click en una carta le dará la vuelta para mostrar su contenido.
- Hacer click en dos cartas que formen una pareja hará que las cartas queden descubiertas.
- Si descubrimos dos cartas que no forman una pareja, las cartas volverán a mostrarse boca abajo automáticamente.
- El juego se terminará cuando todos los parejas estén descubiertas.

### 1. Preparación de la pelea

- [ ] Completa la función `generateCards`.

- Esta función recibe un tamaño `size` y genera una baraja de cartas con `size` / 2 parejas.
- Utiliza al menos un loop para generar las cartas.
- La baraja de cartas se guarda en la variable global `cards`.
- Cada carta tiene un `id` único y un valor de 1 a 8 (por parejas). Es decir, la baraja contendrá dos cartas con el valor 1, dos con el valor 2, etc. hasta el valor 8.
- Puedes generar las cartas de forma ordenada y después utilizar la función `shuffle` para mezclar la baraja (ver siguiente punto).

- [ ] Completa la función `shuffle`.

- Esta función recibe un array y ordena sus elementos de forma aleatoria.
- Utiliza un loop descendente utilizando una variable `i`. Selecciona una posición aleatoria `j` entre 0 y `i` e intercambia los elementos de la posición seleccionada `j` con la posición `i`. Esta operación se repite hasta que todos los elementos del array han sido intercambiados.
- Utiliza la función [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) para seleccionar un número aleatoriamente.
- Utiliza la función [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) para redondear el número aleatorio.

### 2. Mostrar la pelea

![Mostrar la pelea](img/img1.png)

- [ ] Crear la cuadrícula

- Genera un contenedor grid de 4 x 4 en el archivo HTML
- Este grid deberá estar posicionado en el centro de la página

- [ ] Completa la función `showCards`.

- Genera un elemento `div` para cada carta de la baraja, y muéstralo dentro del grid. Da al elemento una clase CSS `card`.
- El contenido del `div` es el valor de la carta.

- [ ] Añade un botón "New Game".

- Hacer click en este botón tendrá que crear un juego nuevo.

- [ ] Da estilos visuales al juego
- El estilo es libre. Hazlo como quieras.

### 3. Dar la vuelta a las cartas

![Dar la vuelta a las cartas](img/img2.png)

- [ ] Marca las cartas como descubiertas.

 - Hacer click en una carta debe marcarla como "descubrimiento". Utiliza `handleCardClick` como gestor del evento `click` de la carta.
 - Añade una nueva propiedad a cada objeto carta si lo necesitas.
 - Completa la función `flipCard` para ello.

- [ ] Visualiza la cara y el reverso de cada carta

 - Ahora mismo estamos mostrando un número por cada carta.
 - En lugar de ello, debería mostrarse el contenido de la carta sólo cuando ésta está descubierta.
 - Por eso, haremos que el elemento visual que muestra la carta contenga dos elementos:
 - Un elemento `div` con una clase `back` que contendrá un color de fondo.
 - Un elemento `div` con una clase `front` que contendrá el valor de la carta.
 - Para no mostrar nunca el valor y el reverso de la carta a la vez, hacemos que los elementos `back` y `front` tengan una posición `absolute` y que el elemento `card` tenga una posición `relative` .
 - En lugar de mostrar un número, muestra una imagen. Puedes utilizar tus propias imágenes (denomina los archivos `1.png`, `2.png`, etc.) para una fácil identificación. También puedes utilizar imágenes de [Lorem Picsum](https://picsum.photos/) u otro servicio.

- [ ] Completa la función `updateCards`.

 - Esta función debe añadir o quitar la clase `flipped` a cada carta, en función de su estado (si está descubierta o no).
 - Selecciona todas las cartas del DOM, y para cada una de ellas, comprueba si la carta está o no descubierta (mirando al array `cards`).
 - Al hacer click en cada carta, además de marcarla como descubrimiento, debe llamarse la función `updateCards` para actualizar su visualización.

- [ ] Agregar estilos
 - Cuando una carta tiene la clase `flipped`, debería verse sólo el `frente` de la carta.
 - Cuando una carta no tiene la clase `flipped`, debería verse sólo el `back` de la carta.
 - Puedes crear un efecto visual para ello utilizando la propiedad CSS `transform` y aplicando una rotación [`rotateY`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform- function/rotateY). Combina las rotaciones de `0deg` y `180deg` en los elementos `front` y `back` para crear el efecto de girar una carta. Para no mostrar la parte trasera de un elemento HTML, utiliza la propiedad [`backface-visibility: hidden;`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface -visibility)
 - Utiliza [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) para animar el efecto de rotación de cada carta.

### 4. Aplica la lógica del juego al código

![Cartas pareadas](img/img3.png)

- [ ] Sólo dos cartas pueden ser descubiertas al mismo tiempo.

 - Hazlo en la función `flipCard`. Asegúrate de dar la vuelta a una carta sólo si hay menos de dos cartas descubiertas.

- [ ] Marca las cartas como `matched` cuando se han encontrado.

 - Completa la función `checkMatched` para ello. Esta función debe llamarse cada vez que damos la vuelta a una carta.
 - Añade una nueva propiedad a cada objeto carta si lo necesitas.
 - Hemos encontrado una pareja si tenemos dos cartas descorchadas y su valor es el mismo.
 - Si hemos encontrado una pareja, las cartas deben marcarse como `matched`.
 - En la función `flipCard`, deberás tener en cuenta las cartas que ya han sido `matched`.

- [ ] Vuelve a tapar las cartas

 - Completa la función `flipBack` para ello.
 - Esta función marca las cartas como "no destapadas" si hemos destapado dos pero no son pareja.
 - No tengas en cuenta las cartas `matched` como cartas destapadas.
 - Esta función debe llamarse automáticamente al cabo de un segundo de destapar cada carta, utilizando la función [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout ).

- [ ] Añade un estilo visual para las cartas pareadas

 - Puedes remarcar el borde con un color diferente, mostrar un icono ✅ o algún otro elemento visual.

- [ ] Comprueba si se han encontrado todas las parejas

 - Cada vez que se haga click, comprobar si hemos terminado el juego.
 - Hemos terminado el juego si todas las cartas han sido emparejadas.
 - Muestra un mensaje de felicitación cuando el juego haya terminado.

### 5. Mejora el juego (OPCIONAL)

- [ ] Añade un contador de "número de movimientos".
- [ ] Añade un contador de tiempo.
- [ ] ...

## Recursos

- [MDL - Manipulating the DOM Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Plain JS - Common DOM Manipulation methods](https://plainjs.com/javascript/manipulation/)
- [Eloquent JavaScript - The DOM](https://eloquentjavascript.net/14_dom.html)
- [Eloquent JavaScript - Handling Events](https://eloquentjavascript.net/15_event.html)

## Notas

_Este es un proyecto de estudiante creado en [CodeOp](http://CodeOp.tech), en el bootcamp de Front End Development en Barcelona._