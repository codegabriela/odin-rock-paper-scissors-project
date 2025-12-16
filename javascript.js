//primeiro vou fazer a escolha do computador
//fazer a função
//math.random
//switch case 0 rock 1 paper 2 scissors return
// console.log(variavelescolhida p mostrar o que saiu)

function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    switch (computer) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }

}

console.log(getComputerChoice());