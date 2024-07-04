const numBubbles = 10;
const container = document.querySelector(".container")
let count = 0;

let div = document.createElement("div");
div.classList.add("bubble");

for(let i = 0; i < numBubbles; i++){

    // container.appendChild(div);
    
}

container.addEventListener("click", push);

function push(event) {
    if(count < 10) {
        div = document.createElement("div");
        div.classList.add("bubble");
        let x = Math.floor(Math.random()*370)
        let y = Math.floor(Math.random()*370)
        
        div.style.top = y + "px";
        div.style.left = x + "px";
        container.appendChild(div);
        count++;

        if(count === numBubbles) {
            alert("You took all bubbles");
        }
    }
}

// function pop(event) {
//     if(event.target.className === "bubble") {
//         container.removeChild(event.target)
//         contador++;
//         if(contador === numBubbles) {
//             alert("YA NO QUEDAN BURBUJAS")
//         }
//     }
// }
