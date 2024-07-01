// holds the deck of cards for the game
let cards = [];

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {
  for (let i = 1; i <= size * size / 2; i++) {
    cards.push({ id: `card-${i}`, value: i });
    cards.push({ id: `card-${i}`, value: i });
  }
}

// shuffles an array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// flips a card by id
function flipCard(id) {
  const card = document.getElementById(id);
  const cardObj = cards.find((c) => c.id === id);
  if (cardObj.flipped) return;
  if (cards.filter((c) => c.flipped).length >= 2) return;
  card.classList.toggle("flipped");
  cardObj.flipped = true;
}

// marks any flipped cards as matched if they match
function checkMatched() {
  const flippedCards = cards.filter((card) => card.flipped);
  if (flippedCards.length < 2) return;
  const pairFound = false;
  for (let i = 0; i < flippedCards.length - 1; i++) {
    const card1 = flippedCards[i];
    for (let j = i + 1; j < flippedCards.length; j++) {
      const card2 = flippedCards[j];
      if (card1.value === card2.value) {
        pairFound = true;
        card1.matched = true;
        card2.matched = true;
      }
    }
  }
  if (pairFound) {
    setTimeout(() => {
      flipBack();
    }, 1000);
  }
}

// shows a message if the game is over
function checkWin() {
  const matchedCards = cards.filter((card) => card.matched);
  if (matchedCards.length === cards.length / 2) {
    alert("Congratulations! You won!");
    createGame(4);
  }
}

// sets all flipped props to false except for the matched ones
function flipBack() {
  const flippedCards = cards.filter((card) => card.flipped);
  flippedCards.forEach((card) => {
    card.flipped = false;
    if (!card.matched) document.getElementById(card.id).classList.remove("flipped");
  });
}

// handles the click on a card
function handleCardClick(id) {
  flipCard(id);
}

// creates the DOM elements for the cards
function showCards() {
  const gridContainer = document.getElementById("grid");
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    gridContainer.appendChild(cardElement);
    // add front and back elements to the card
    const frontElement = document.createElement("div");
    frontElement.className = "front";
    frontElement.style.backgroundImage = `url('images/${card.value}.png')`;
    cardElement.appendChild(frontElement);
    const backElement = document.createElement("div");
    backElement.className = "back";
    backElement.style.backgroundImage = `url('images/back.png')`;
    cardElement.appendChild(backElement);
  });
}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {
  cards.forEach((card) => {
    const cardElement = document.getElementById(card.id);
    if (card.matched) cardElement.classList.add("matched");
  });
}

// initializes the game
function createGame(size) {
  generateCards(size);
  shuffle(cards);
}

// calls createGame when the page loads
createGame(4);

// adds event listener to the grid container to handle card clicks
document.getElementById("grid").addEventListener("click", (event) => {
  handleCardClick(event.target.id);
});