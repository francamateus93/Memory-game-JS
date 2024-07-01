const totalCards = 12; // total de cards
// const availableCards = ['A', 'K', 'Q', 'J'];

let cards = []; // cards creados
let selectedCards = []; // cards selecionados
let valuesUsed = []; // valores de los cards
let currentMove = 0; // movimiento actual
let currentAttempts = 0; // tentativas actuales

// define una variavel para DIV
let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

for (let i=0; i < totalCards; i++) { // iteracion para crear cada carta

  let div = document.createElement('div'); // crea un 'div' en html

  div.innerHTML = cardTemplate; // añade al 'div' los cards template

  cards.push(div); // añade el 'div' al array cards

  document.querySelector('#js-game').append(cards[i]); // añade al GAME el array com cartas creadas
  // 
}