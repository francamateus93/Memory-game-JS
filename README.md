# 🧠 DOM Memory Game

The memory game involves players flipping over pairs of cards laid face down to find matches. The objective is to collect the most pairs by remembering the positions of the cards. The game continues until all pairs are found, with the player having the most pairs declared the winner. It enhances memory skills and provides social interaction, making it suitable for all ages.

- We will create a memory game with 4 x 4 = 16 cards (decirally, 8 pairs).
- The cards will be mixed randomly each time we start a new game.
- The letters will be presented to the mouth below.
- Clicking on a letter will take you back to showing its contents.
- Click on two cards that form a pair and the cards will be discovered.
- If we discover that the cards do not form a pair, the cards will automatically return to being lowered.
- The game will end when all couples are discovered.

## Project goals

- Manipulate the DOM directly, adding and eliminating elements.
- Use CSS to style page elements.
- Add event managers (event handlers) to interact with the actions that the user takes on the page.
- Manage game data in an orderly and structured way, separate from visualization - Implement game operating logic in an orderly and structured way, dividing the code into as many functions as necessary.
- Separate the operating logic from the visualization code.

## Softwares and Languages

- **Javascript**: (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Tailwind**: (https://tailwindcss.com/)
- **HTML**: (https://developer.mozilla.org/es/docs/Web/HTML)
- **VSCode**: (https://code.visualstudio.com/)

## Getting Started

To run the project locally, follow the steps below:

1. **Clone the repository**:

```bash
git clone https://github.com/francamateus93/memory-game.git
cd memory-game
```

2. **Install the dependencies**:

```bash
npm install
```

3. **Run the application**:

```bash
npm run dev
```

4. **Acess**: Open your web browser and go to `http://localhost:8080` to see the application in action.

## Project Requirements

### 1. Preparing the cards

- [ ] Complete the `generateCards` function.

- This function receives a size `size` and generates a deck of cards with `size` / 2 pairs.
- Use at least one loop to generate the cards.
- The deck of cards is stored in the global variable `cards`.
- Each card has a unique `id` and a value from 1 to 8 (in pairs). That is, the deck will contain two cards with the value 1, two with the value 2, etc. up to the value 8.
- You can generate the cards in an ordered way and then use the `shuffle` function to shuffle the deck (see next point).

- [ ] Complete the `shuffle` function.

- This function receives an array and orders its elements randomly.
- Use a descending loop using a variable `i`. Select a random position `j` between 0 and `i` and swap the elements of the selected position `j` with position `i`. This operation is repeated until all elements of the array have been swapped.
- Use the [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function to select a random number.
- Use the [`Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) function to round the random number.

### 2. Showing the fight

- [ ] Create the grid

- Generate a 4 x 4 grid container in the HTML file
- This grid should be positioned in the center of the page

- [ ] Complete the `showCards` function.

- Generate a `div` element for each card in the deck, and display it inside the grid. Give the element a CSS class of `card`.
- The content of the `div` is the value of the card.

- [ ] Add a "New Game" button.

- Clicking this button will create a new game.

- [ ] Give the game visual styles
- The style is free. Do it however you want.

### 3. Flipping cards

- [ ] Mark cards as face up.

- Clicking on a card should mark it as "face up". Use `handleCardClick` as a handler for the card's `click` event.
- Add a new property to each card object if you need to.
- Complete the `flipCard` function for this.

- [ ] Display the face and back of each card

- Right now we are displaying a number for each card.
- Instead, the content of the card should be displayed only when the card is face up.
- So, we'll make the visual element that displays the card contain two elements:
- A `div` element with a `back` class that will hold a background color.
- A `div` element with a `front` class that will hold the value of the card.
- To never display the value and the back of the card at the same time, we make the `back` and `front` elements have an `absolute` position and the `card` element have a `relative` position.
- Instead of displaying a number, display an image. You can use your own images (name the files `1.png`, `2.png`, etc.) for easy identification. You can also use images from [Lorem Picsum](https://picsum.photos/) or another service.

- [ ] Complete the `updateCards` function.

- This function should add or remove the `flipped` class to each card, depending on its state (whether it's flipped or not).
- Select all cards in the DOM, and for each card, check whether or not the card is uncovered (by looking at the `cards` array).
- When clicking on each card, in addition to marking it as uncovered, the `updateCards` function should be called to update its display.

- [ ] Adding styles
- When a card has the `flipped` class, only the `front` of the card should be visible.
- When a card does not have the `flipped` class, only the `back` of the card should be visible.
- You can create a visual effect for this by using the CSS `transform` property and applying a rotation [`rotateY`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY). Combine the `0deg` and `180deg` rotations on the `front` and `back` elements to create the effect of flipping a card. To not show the back of an HTML element, use the [`backface-visibility: hidden;`](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility) property
- Use [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) to animate the flipping effect of each card.

### 4. Apply game logic to your code

- [ ] Only two cards can be flipped at a time.

- Do this in the `flipCard` function. Make sure to flip a card only if there are less than two cards flipped.

- [ ] Mark cards as `matched` when they have been found.

- Complete the `checkMatched` function for this. This function should be called every time we flip a card.
- Add a new property to each card object if you need it.
- We have found a match if we have two uncorked cards and their value is the same.

### 4. Apply game logic to your code

- [ ] Only two cards can be uncovered at a time.

- Do this in the `flipCard` function. Make sure to flip a card only if there are less than two cards uncovered.

- [ ] Mark cards as `matched` when they have been found.

- Complete the `checkMatched` function for this. This function should be called every time we flip a card.
- Add a new property to each card object if you need to.
- We have found a match if we have two cards uncovered and their value is the same.
- If we have found a match, the cards should be marked as `matched`.
- In the `flipCard` function, you should take into account the cards that have already been `matched`.

- [ ] Flip the cards back over

- Complete the `flipBack` function for this.
- This function marks cards as "unfaced" if we have unfaced two but they are not a match.
- Do not count `matched` cards as face-up cards.
- This function should be called automatically within one second of each card being unfaced, using the [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) function.

- [ ] Add a visual style for matched cards

- You can highlight the border with a different color, show a ✅ icon, or some other visual element.

- [ ] Check if all matches have been found

- Each time you click, check if we have finished the game.
- We have finished the game if all cards have been matched.
- Show a congratulatory message when the game is over.

## Resources

- [MDL - Manipulating the DOM Guide] (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Plain JS - Common DOM Manipulation methods] (https://plainjs.com/javascript/manipulation/)
- [Eloquent JavaScript - The DOM] (https://eloquentjavascript.net/14_dom.html)
- [Eloquent JavaScript - Handling Events] (https://eloquentjavascript.net/15_event.html)

## Notes

_This is a student project created at [CodeOp](http://CodeOp.tech), at the Front End Development bootcamp in Barcelona._
