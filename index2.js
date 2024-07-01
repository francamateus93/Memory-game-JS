// holds the deck of cards for the game
let cards = [];

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {
  const numPairs = size * size / 2;
  const values = [...Array(numPairs).keys()].map(() => Math.floor(Math.random() * 8) + 1);
  const cards = [];

  for (let i = 0; i < size * size; i++) {
    cards.push({
      id: `card-${i}`,
      value: values[Math.floor(i / 2)],
      flipped: false,
      matched: false
    });
  }

  shuffle(cards);

  return cards;
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
  const card = cards.find((card) => card.id === id);
  if (!card.flipped && card.matched) return;

  card.flipped = true;
  updateCards();
}

function updateCards() {
  const cardsToFlip = cards.filter((card) => card.flipped);
  cardsToFlip.forEach((card) => {
    card.flipCard(card);
  });
}

// marks any flipped cards as matched if they match
function checkMatched() {
  const matchedCards = cards.filter((card) => card.matched);
  if (matchedCards.length === size * size / 2) {
    checkWin();
  }
}

// shows a message if the game is over
function checkWin() {
  alert("¡Felicidades! Has ganado el juego!");
}

// sets all flipped props to false except for the matched ones
function flipBack() {
  setTimeout(() => {
    cards.forEach((card) => {
      if (!card.matched && !card.flipped) {
        card.flipped = false;
      }
    });
    updateCards();
  }, 1000);
}

// handles the click on a card
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    flipCard(event.target.id);
    handleCardClick(event.target.id);
  }
});

function handleCardClick(id) {
  const card = cards.find((card) => card.id === id);
  if (!card.flipped) return;

  if (cards.find((otherCard) => otherCard.value === card.value && !otherCard.matched)) {
    card.matched = true;
    checkMatched();
  } else {
    flipBack();
  }
}

// creates the DOM elements for the cards
function showCards() {
  const gridContainer = document.getElementById("grid");
  gridContainer.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = card.id;
    cardElement.innerHTML = `<div class="back" style="background-color: #fff;"></div><div class="front">${card.value}</div>`;
    gridContainer.appendChild(cardElement);
  });
}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {
  cards.forEach((card) => {
    if (card.flipped) {
      cardElement.querySelector(".front").style.display = "block";
      cardElement.querySelector(".back").style.display = "none";
    } else {
      cardElement.querySelector(".front").style.display = "none";
      cardElement.querySelector(".back").style.display = "block";
    }
  });
}

// initializes the game
function createGame(size) {
  generateCards(size * size);
  showCards();
}

// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(4);



// const totalCards = 12; // total de cards
// // const availableCards = ['A', 'K', 'Q', 'J'];

// let cards = []; // cards creados
// let selectedCards = []; // cards selecionados
// let valuesUsed = []; // valores de los cards
// let currentMove = 0; // movimiento actual
// let currentAttempts = 0; // tentativas actuales

// // define una variavel para DIV
// let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

// for (let i=0; i < totalCards; i++) { // iteracion para crear cada carta

//   let div = document.createElement('div'); // crea un 'div' en html

//   div.innerHTML = cardTemplate; // añade al 'div' los cards template

//   cards.push(div); // añade el 'div' al array cards

//   document.querySelector('#js-game').append(cards[i]); // añade al GAME el array com cartas creadas
//   // 
// }