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

// shuffles an array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}

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

// shows a message if the game is over
function checkWin() {
    if (matchedCards === cards.length) {
        alert('¡Congratulations! ¡You Win! You have found all the pairs.');
    }
}

// sets all flipped props to false except for the matched ones
function flipBack() {
    flippedCards.forEach(card => card.flipped = false); 
    flippedCards = []; 
    updateCards(); 
}

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
