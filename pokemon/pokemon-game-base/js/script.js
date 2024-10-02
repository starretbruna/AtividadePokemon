// . para classes 
// # ids
// node do elemento 

// div h1  => h1 dentro de uma div
// querySelector => seleciona apena o primeiro elemento(o primeiro elemento encontrado)
// querySelextorAll => seleciona todos os elementos e coloca dentro de uma array


// variaveis do jogo
const body = document.querySelector('body');
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");


const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");


body.addEventListener("keydown", (Event) => {
    Event.stopPropagation();
    //  console.log(Event.code);

    // Movimentação do ash
    switch (Event.code) {
        case 'ArrowLeft':
            ash.src = "../assets/left.png";
            break;

        case 'ArrowRight':
            ash.src = "../assets/right.png";
            break;

        case 'ArrowDown':
            ash.src = "../assets/front.png";
            break;

        case 'ArrowUp':
            ash.src = "../assets/back.png";
            break;

        default:
            break;
    }
})

