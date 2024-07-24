// holds the deck of cards for the game
let cards = [];
let flippedCards = [];
let matchedCards = 0; 

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {
    cards = [];
    for (let i = 1; i <= size / 2; i++) { 

       // Se crea un objeto 'cards' adicional con el mismo valor y se agrega a la variable cards, se hace para generar pares de cartas.
        cards.push({ id: `${i}a`, value: i, flipped: false, matched: false });
        cards.push({ id: `${i}b`, value: i, flipped: false, matched: false });
    } 
    shuffle(cards); 
}

// El resultado es una baraja de cartas pares con los siguientes características:
// Cada carta tiene un valor entre 1 y size / 2.
// Cada carta tiene un lado con id's diferentes.
// Todas las cartas inician no flipadas ni matched.


// shuffles an array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {

        // utilizando Math.random() * (i + 1) = genera un número aleatorio entre 0 y el índice actual [i]
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; // intercambia los elementos del array en i y j
    }
}

// La función no devuelve nada, porque modifica el array original en lugar de crear un nuevo. la funcion apenas mescla el array.


// flips a card by id
function flipCard(id) {

    // utiliza el método find para bucar la carta con el mismo id
    let card = cards.find(card => card.id === id);

    // busca si es la carta y si no está flipada 
    if (card && !card.flipped && flippedCards.length < 2) { // La carta no debe haber sido flipada antes y la cant. de cartas flipadas no debe superar 2
        card.flipped = true; // si dá match, flipa la carta
        flippedCards.push(card); // se añade la carta al array de cartas flipadas
        updateCards(); // llama la función para actualizar el estado de la carta

        if (flippedCards.length === 2) { // si el length de cartas flipadas es === 2, 
            checkMatched(); // llama funcion para chequear si las cartas match
        }
    }
}

// función gestiona el estado de las cartas y verifica si las cartas son pares. si son pares, se flipan las cartas y se añaden las cartas flipadas al array 'flippedCards'. Cuando se flipan, llama a la función para chequear.


// marks any flipped cards as matched if they match
function checkMatched() {
    if (flippedCards[0].value === flippedCards[1].value) { // verifica si las cartas tienen el mismo .value

        flippedCards.forEach(card => card.matched = true); // llama metodo 'forEach' con funcion de estabelecer que el value .matched es igual true en las dos cartas
        matchedCards += 2; // incrementa en 2 el contador de matchedCards
        flippedCards = []; // añade las cartas al array de cartas flipadas
        checkWin(); // chequear si has ganado el juego
    } else {
        setTimeout(flipBack, 1000); // si no son pares, llama el metodo para estabelecer un temporizador con funcion de volver a carta
    }
}

// verifica si las cartas flipadas tienen el mesmo valor, si es verdade, encrementa en 2 el contador matchedCards. limpia el array flippedCards y chequeas si has ganado el juego.


// shows a message if the game is over
function checkWin() {
    if (matchedCards === cards.length) {
        alert('¡Congratulations! ¡You Win! You have found all the pairs.');
    }
}
// la funcion chequea si has ganado y enseña un alerta del fin del juego.

// sets all flipped props to false except for the matched ones
function flipBack() {
    flippedCards.forEach(card => card.flipped = false); // para cada uno de las cartas, llama funcion que define las cartas flipadas en false, y vuelven a estar oculta
    flippedCards = []; // limpia el array para reciber nuevas cartas
    updateCards(); // llama la función para actualizar el estado de la carta
}

// el metodo flipBack se encarga de flipar las cartas que han sido encontradas pero que no son pares y volverlas a la posición original.

// handles the click on a card
function handleCardClick(event) {
    const id = event.currentTarget.dataset.id; // captura el event de click con base en el Id
    flipCard(id); // llama funcion que flipa la carta
}

// creates the DOM elements for the cards
function showCards() {

    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id; // Se agrega un atributo data-id al elemento con el valor de la propiedad id de la carta.
        cardElement.innerHTML = `
            <div class="front"><img src="img/${card.value}.jpg" alt="Card ${card.value}" class="img-card"></div>
            <div class="back"></div>
        `;
        cardElement.addEventListener('click', handleCardClick); // Se agrega un evento de click a cada carta y llama la funcion handleCardClick para ejecutar cuando se clickie en la carta.
        grid.appendChild(cardElement); // añade al grid los elementos creados con metodo appendChild
    });
}

// Al recorrer el array de cartas, crea un elemento HTML para cada una y lo añade al elemento grid. Cada carta tiene id para identificarla y un evento de click.

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {
    cards.forEach(card => {

        const cardElement = document.querySelector(`.card[data-id="${card.id}"]`); // busca el elemento HTML div que tiene la clase card y un atributo data-id igual al valor de la propiedad id de la carta. El resultado se asigna a la variable cardElement.

        if (card.flipped === true) {
            cardElement.classList.add('flipped');
        } else {
            cardElement.classList.remove('flipped');
        }
    });
}

// initializes the game
function createGame(size) {
    generateCards(size); // generar las cartas
    showCards(); // enseñar las cartas
    matchedCards = 0; // empezar el contador de cuántas cartas han sido pareja.
    flippedCards = []; // empezar el array que almacena las cartas flipadas.
}

// Event listener for new game button
document.getElementById('new-game').addEventListener('click', () => createGame(16));


// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(16);
