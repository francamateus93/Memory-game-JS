// holds the deck of cards for the game
let cards = []; 
let flippedCards = []; 
let matchedCards = 0; 

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {
    cards = [];
    for (let i = 1; i <= size / 2; i++) { 
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
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}

// La función no devuelve nada, porque modifica el array original en lugar de crear un nuevo. la funcion apenas mescla el array.


// flips a card by id
function flipCard(id) {
    let card = cards.find(card => card.id === id);
    if (card && !card.flipped && flippedCards.length < 2) { 
        card.flipped = true; 
        flippedCards.push(card); 
        updateCards(); 
        if (flippedCards.length === 2) { 
            checkMatched(); 
        }
    }
}

// función gestiona el estado de las cartas y verifica si las cartas son pares. si son pares, se flipan las cartas y se añaden las cartas flipadas al array 'flippedCards'. Cuando se flipan, llama a la función para chequear.


// marks any flipped cards as matched if they match
function checkMatched() {
    if (flippedCards[0].value === flippedCards[1].value) { 
        flippedCards.forEach(card => card.matched = true); 
        matchedCards += 2; 
        flippedCards = []; 
        checkWin(); 
    } else {
        setTimeout(flipBack, 1000);
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
    flippedCards.forEach(card => card.flipped = false); 
    flippedCards = []; 
    updateCards(); 
}

// el metodo flipBack se encarga de flipar las cartas que han sido encontradas pero que no son pares y volverlas a la posición original.

// handles the click on a card
function handleCardClick(event) {
    const id = event.currentTarget.dataset.id; 
    flipCard(id);
}

// creates the DOM elements for the cards
function showCards() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id; 
        cardElement.innerHTML = `
            <div class="front"><img src="img/${card.value}.jpg" alt="Card ${card.value}" class="img-card"></div>
            <div class="back"></div>
        `;
        cardElement.addEventListener('click', handleCardClick);
        grid.appendChild(cardElement); 
    });
}

// Al recorrer el array de cartas, crea un elemento HTML para cada una y lo añade al elemento grid. Cada carta tiene id para identificarla y un evento de click.

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {
    cards.forEach(card => {
        const cardElement = document.querySelector(`.card[data-id="${card.id}"]`);
        if (card.flipped === true) {
            cardElement.classList.add('flipped');
        } else {
            cardElement.classList.remove('flipped');
        }
        if (card.matched === true) {
            cardElement.classList.add('matched');
        }
    });
}

// actualiza la classe del las cartas en el DOM baseado en el estado de la carta

// initializes the game
function createGame(size) {
    generateCards(size); 
    showCards(); 
    matchedCards = 0; 
    flippedCards = []; 
}

// Event listener for new game button
document.getElementById('new-game').addEventListener('click', () => createGame(16));


// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(16);
