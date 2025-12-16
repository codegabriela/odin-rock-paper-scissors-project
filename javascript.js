function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3);
    let choice;
    switch (computer) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    console.log("Computer choose: ", choice)
    return choice;
}


function getHumanChoice() {
    const playerChoice = prompt("You must select Rock, Paper, or Scissors? ");
    const playerChoiceLower = playerChoice.toLowerCase();
    console.log("You choose: ", playerChoice);
    return playerChoiceLower;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(++humanScore);
        return "You win! Rock beats Scissors.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(++humanScore);
        return "You win! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(++humanScore);
        return "You win! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(++computerScore);
        return "You lose! Rock beats Scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(++computerScore);
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(++computerScore);
        return "You lose! Scissors beats Paper.";
    } else {
        return "Draw.";
    }
}


function playGame() {
    //const humanSelection = getHumanChoice();
    //const computerSelection = getComputerChoice();
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

    if (computerScore > humanScore) {
        console.log(`Computer Score: ${computerScore} VS ${humanScore}`);
        console.log("Computador Win the game!!");
    } else if (humanScore > computerScore) {
        console.log(`Computer Score: ${computerScore} VS ${humanScore}`);
        console.log("You Win the game!");
    }
}
playGame();
