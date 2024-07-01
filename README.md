# 🧠 DOM Memory Game

En aquesta activitat crearàs un joc de memoria amb el DOM, HTML i CSS.

## Objectius

- Manipular el DOM directament, afegint i eliminant elements.
- Fer servir CSS per donar estils als elements de la pàgina.
- Afegir gestors d'esdeveniments (event handlers) per interactuar amb les accions que l'usuari faci a la pàgina.
- Gestionar les dades del joc de manera ordenada i estructurada, separades de la visualització
- Implementar la lògica de funcionament del joc de manera ordenada i estructurada, dividint el codi en tantes funcions com calgui.
- Separar la lògica de funcionament del codi de la visualització.

## Configuració

- `npm install` per instal·lar Tailwind CSS.
- `npm start` per a inicialitzar el compilador de Tailwind CSS.
- Obre `index.html` al navegador amb el Live Server de VS Code.

## Requisits bàsics

- Crearem un joc de memoria amb 4 x 4 = 16 cartes (és a dir, 8 parelles).
  Les cartes estaran barrejades de manera aleatòria cada vegada que comencem un joc nou.
- Les cartes es presentaran cap per avall.
- Fer click a una carta li donarà la volta per mostrar-ne el contingut.
- Fer click en dues cartes que formin una parella farà que les cartes queduin descobertes.
- Si descobrim dues cartes que no formen una parella, les cartes tornaran a mostrar-se cap per avall automàticament.
- El joc s'acabarà quan tots els parelles estiguin descobertes.

### 1. Preparació de la baralla

- [ ] Completa la funció `generateCards`.

  - Aquesta funció reb una mida `size` i genera una baralla de cartes amb `size` / 2 parelles.
  - Utilitza almenys un loop per a generar les cartes.
  - La baralla de cartes es guarda a la variable global `cards`.
  - Cada carta té un `id` únic i un valor de 1 a 8 (per parelles). És a dir, la baralla contindrà dues cartes amb el valor 1, dues amb el valor 2, etc. fins al valor 8.
  - Pots generar les cartes de manera ordenada i després utilitzar la funció `shuffle` per a barrejar la baralla (veure següent punt).

- [ ] Completa la funció `shuffle`.

  - Aquesta funció reb un array i ordena els seus elements de manera aleatòria.
  - Utilitza un loop descendent utilitzant una variable `i`. Selecciona una posició aleatòria `j` entre 0 i `i` i intercanvia els elements de la posició seleccionada `j` amb la posició `i`. Aquesta operació es repeteix fins que tots els elements del array han estat intercanvats.
  - Utilitza la funció [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) per a seleccionar un número aleatòriament.
  - Utilitza la funció [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) per a arrodonir el número aleatori.

### 2. Mostrar la baralla

![Mostrar la baralla](img/img1.png)

- [ ] Crea la quadrícula

  - Genera un contenidor grid de 4 x 4 a l'arxiu HTML
  - Aquest grid haurà d'estar posicionat al centre de la pàgina

- [ ] Completa la funció `showCards`.

  - Genera un element `div` per a cada carta de la baralla, i mostra'l dins del grid. Dóna a l'element una classe CSS `card`.
  - El contingut del `div` és el valor de la carta.

- [ ] Afegeix un botó "New Game".

  - Fer click a aquest botó haurà de crear un joc nou.

- [ ] Dóna estils visuals al joc
  - L'estil és lliure. Fes-ho com vulguis.

### 3. Donar la volta a les cartes

![Donar la volta a les cartes](img/img2.png)

- [ ] Marca les cartes com a descobertes.

  - Fer click en una carta ha de marcar-la com a "descoberta". Utilitza `handleCardClick` com a gestor de l'esdeveniment `click` de la carta.
  - Afegeix una propietat nova a cada objecte carta si ho necessites.
  - Completa la funció `flipCard` per a fer això.

- [ ] Visualitza la cara i el revers de cada carta

  - Ara mateix estem mostrant un número per cada carta.
  - Enlloc d'això, s'hauria de mostrar el contingut de la carta només quan aquesta està descoberta.
  - Per això, farem que l'element visual que mostra la carta contingui dos elements:
    - Un element `div` amb una classe `back` que contindrà un color de fons.
    - Un element `div` amb una classe `front` que contindrà el valor de la carta.
    - Per tal de no mostrar mai el valor i el revers de la carta a la vegada, fem que els elements `back` i `front` tinguin una posició `absolute` i que l'element `card` tingui una posició `relative`.
  - Enlloc de mostrar un número, mostra-hi una imatge. Pots utilitzar les teves propies imatges (anomena els arxius `1.png`, `2.png`, etc.) per a una fàcil identificació. També pots utilitzar imatges de [Lorem Picsum](https://picsum.photos/) o un altre servei.

- [ ] Completa la funció `updateCards`.

  - Aquesta funció ha d'afegir o treure la classe `flipped` a cada carta, en funció del seu estat (si està descoberta o no).
  - Selecciona totes les cartes del DOM, i per a cada una de elles, comprova si la carta està descoberta o no (mirant a l'array `cards`).
  - En fer click a cada carta, a més de marcar-la com a descoberta, s'ha de cridar la funció `updateCards` per a actualitzar-ne la visualització.

- [ ] Afegeix estils
  - Quan una carta té la classe `flipped`, s'hauria de veure només el `front` de la carta.
  - Quan una carta no té la classe `flipped`, s'hauria de veure només el `back` de la carta.
  - Pots crear un efecte visual per a això utilitzant la propietat CSS `transform` i aplicant-hi una rotació [`rotateY`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY). Combina les rotacions de `0deg` i `180deg` en els elements `front` i `back` per crear l'efecte de girar una carta. Per tal de no mostrar la part del darrera d'un element HTML, utilitza la propietat [`backface-visibility: hidden;`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)
  - Utilitza [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) per a animar l'efecte de rotació de cada carta.

### 4. Aplica la lògica del joc al codi

![Cartes aparellades](img/img3.png)

- [ ] Només dues cartes poden estar descobertes al mateix temps.

  - Fes-ho a la funció `flipCard`. Assegura't de donar la volta a una carta només si hi menys de dues cartes descobertes.

- [ ] Marca les cartes com a `matched` quan s'han trobat.

  - Completa la funció `checkMatched` per a fer això. Aquesta funció s'ha de cridar cada cop que donem la volta a una carta.
  - Afegeix una propietat nova a cada objecte carta si ho necessites.
  - Hem trobat una parella si tenim dues cartes destapades i el seu valor es el mateix.
  - Si hem trobat una parella, les cartes s'han de marcar com a `matched`.
  - A la funció `flipCard`, hauràs de tenir en compte les cartes que ja han estat `matched`.

- [ ] Torna a tapar les cartes

  - Completa la funció `flipBack` per a fer això.
  - Aquesta funció marca les cartes com a "no destapades" si n'hem destapat dues pero no són parella.
  - No tinguis en compte les cartes `matched` com a cartes destapades.
  - Aquesta funció s'ha de cridar automàticament al cap d'un segon de destapar cada carta, utilitzant la funció [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout).

- [ ] Afegeix un estil visual per a les cartes aparellades

  - Pots remarcar la vora amb un color diferent, mostrar una icona ✅ o algun altre element visual.

- [ ] Comprova si s'han trobat totes les parelles

  - Cada cop que es faci click, cal comprovar si hem acabat el joc.
  - Hem acabat el joc si totes les cartes han estat aparellades.
  - Mostra un missatge de felicitació quan el joc s'hagi acabat.

### 5. Millora el joc (OPCIONAL)

- [ ] Afegeix un comptador de "número de moviments".
- [ ] Afegeix un comptador de temps.
- [ ] ...

## Recursos

- [MDN - Manipulating the DOM Guide](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Plain JS - Common DOM Manipulation methods](https://plainjs.com/javascript/manipulation/)
- [Eloquent JavaScript - The DOM](https://eloquentjavascript.net/14_dom.html)
- [Eloquent JavaScript - Handling Events](https://eloquentjavascript.net/15_event.html)

## Notes

_Aquest és un projecte d'estudiant creat a [CodeOp](http://CodeOp.tech), al bootcamp de Front End Development a Barcelona._


Eres un desarrollador de Javascript, HTML y CSS. Tienes que crear un juego de memoria siguiendo la información que se proporciona a continuación.

Objetivos:
Manipular el DOM directamente, añadiendo y eliminando elementos.
Emplear CSS para dar estilos a los elementos de la página.
Añadir gestores de eventos (event handlers) para interactuar con las acciones que el usuario realice en la página.
Gestionar los datos del juego de forma ordenada y estructurada, separados de la visualización
Implementar la lógica de funcionamiento del juego de forma ordenada y estructurada, dividiendo el código en tantas funciones como sea necesario.
Separar la lógica de funcionamiento del código de la visualización.

Requisitos básicos
Crearemos un juego de memoria con 4 x 4 = 16 cartas (es decir, 8 parejas). Las cartas estarán mezcladas de forma aleatoria cada vez que comencemos un juego nuevo.
Las cartas se presentarán boca abajo.
Hacer click en una carta le dará la vuelta para mostrar su contenido.
Hacer click en dos cartas que formen una pareja hará que las cartas queden descubiertas.
Si descubrimos dos cartas que no forman una pareja, las cartas volverán a mostrarse boca abajo automáticamente.
El juego se terminará cuando todos los parejas estén descubiertas.

1. Preparación de la baraja
 Completa la función generateCards.

Esta función recibe un tamaño size y genera una baraja de cartas con size/2 parejas.
Utiliza por lo menos un loop para generar las cartas.
La baraja de cartas se guarda en la variable global cardos.
Cada carta tiene un id único y un valor de 1 a 8 (por parejas). Es decir, la baraja contendrá dos cartas con el valor 1, dos con el valor 2, etc. hasta el valor 8.
Puedes generar las cartas de forma ordenada y después utilizar la función shuffle para mezclar la baraja (ver siguiente punto).
 Completa la función shuffle.

Esta función recibe un array y ordena sus elementos de forma aleatoria.
Use un loop descendente utilizando una variable i. Selecciona una posición aleatoria j entre 0 e e intercambia los elementos de la posición seleccionada j con la posición i. Esta operación se repite hasta que todos los elementos del array han sido intercambiados.
Use la función Math.random para seleccionar un número aleatoriamente.
Utiliza la función Math.floor para redondear el número aleatorio.

2. Mostrar la pelea

 Crea la cuadrícula

Genera un contenedor grid de 4 x 4 en el archivo HTML
Este grid deberá estar posicionado en el centro de la página
 Completa la función showcards.

Genera un elemento div para cada carta de la baraja, y muéstralo dentro del grid. Da al elemento una clase CSS card.
El contenido del div es el valor de la carta.
 Añade un botón "New Game".

Hacer click en este botón tendrá que crear un juego nuevo.
 Da estilos visuales en el juego

El estilo es libre. Hazlo como quieras.

3. Dar la vuelta a las cartas

 Marca las cartas como descubiertas.

Hacer click en una carta debe marcarla como "descubrimiento". Utiliza handleCardClick como gestor del evento click de la carta.
Añade una nueva propiedad a cada objeto carta si lo necesitas.
Completa la función flipCard para ello.
 Visualiza la cara y el reverso de cada carta

Ahora mismo estamos mostrando un número por cada carta.
En lugar de ello, debería mostrarse el contenido de la carta sólo cuando ésta está descubierta.
Por eso, haremos que el elemento visual que muestra la carta contenga dos elementos:
Un elemento div con una clase back que contendrá un color de fondo.
Un elemento div con una clase frente que contendrá el valor de la carta.
Para no mostrar nunca el valor y el reverso de la carta a la vez, hacemos que los elementos back y front tengan una posición absoluta y que el elemento card tenga una posición relative.
En lugar de mostrar un número, muestra una imagen. Puedes utilizar tus propias imágenes (denomina los archivos 1.png, 2.png, etc.) para una fácil identificación. También puedes utilizar imágenes de Lorem Picsum u otro servicio.
 Completa la función updateCards.

Esta función debe añadir o quitar la clase flipped en cada carta, en función de su estado (si está descubierta o no).
Selecciona todas las cartas del DOM, y para cada una de ellas, comprueba si la carta está o no descubierta (mirando al array cards).
Al hacer click en cada carta, además de marcarla como descubrimiento, debe llamarse la función updateCards para actualizar su visualización.
 Agregar estilos

Cuando una carta tiene la clase flipped, debería verse sólo el frente de la carta.
Cuando una carta no tiene la clase flipped, debería verse sólo el back de la carta.
Puedes crear un efecto visual para ello utilizando la propiedad CSS transform y aplicando una rotación rotateY. Combina las rotaciones de 0deg y 180deg en los elementos frente y back para crear el efecto de girar una carta. Para no mostrar la parte trasera de un elemento HTML, utiliza la propiedad backface-visibility: hidden;
Utiliza transición para animar el efecto de rotación de cada carta.

4. Aplica la lógica del juego al código

 Sólo dos cartas pueden ser descubiertas al mismo tiempo.

Hazlo en la función flipCard. Asegúrate de dar la vuelta a una carta sólo si hay menos de dos cartas descubiertas.
 Marca las cartas como matched cuando se han encontrado.

Completa la función checkMatched para ello. Esta función debe llamarse cada vez que damos la vuelta a una carta.
Añade una nueva propiedad a cada objeto carta si lo necesitas.
Hemos encontrado una pareja si tenemos dos cartas descorchadas y su valor es el mismo.
Si hemos encontrado una pareja, las cartas deben marcarse como matched.
En la función flipCard, tendrás que tener en cuenta las cartas que ya han sido matched.
 Vuelve a tapar las cartas

Completa la función flipBack para ello.
Esta función marca las cartas como "no destapadas" si hemos destapado dos pero no son pareja.
No tengas en cuenta las cartas matched como cartas destapadas.
Esta función debe llamarse automáticamente al cabo de un segundo de destapar cada carta, utilizando la función setTimeout.
 Añade un estilo visual para las cartas pareadas

Puedes remarcar el borde con un color diferente, mostrar un icono ✅ o algún otro elemento visual.
 Comprueba si se han encontrado todas las parejas

Cada vez que se haga click, comprobar si hemos terminado el juego.
Hemos terminado el juego si todas las cartas han sido emparejadas.
Muestra un mensaje de felicitación cuando el juego haya terminado.


Código en Javascript:

// holds the deck of cards for the game
let cards = [];

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {}

// shuffles an array
function shuffle(arr) {}

// flips a card by id
function flipCard(id) {}

// marks any flipped cards as matched if they match
function checkMatched() {}

// shows a message if the game is over
function checkWin() {}

// sets all flipped props to false except for the matched ones
function flipBack() {}

// handles the click on a card
function handleCardClick(id) {}

// creates the DOM elements for the cards
function showCards() {}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {}

// initializes the game
function createGame(size) {
  generateCards(size * size);
  showCards();
}

// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(4);