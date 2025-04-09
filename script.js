

let userScore = 0;
let computerScore = 0;


function getComputerChoice() {
      // return random array item
    const choices = ["paper", "rock", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
    let roundsResult = document.querySelector('.rounds-result');
    let usrScore =  document.querySelector("#usrScore"); // the span in the html
    let cpuScore =  document.querySelector("#cpuScore") // the span in the html

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
                // display the round winner
            roundsResult.textContent = "You lose! Paper beats Rock";
            computerScore++;
            cpuScore.textContent = `${computerScore}`;

        } else if (computerChoice === "scissor") {
            roundsResult.textContent = "You win! Rock beats Scissor";
            userScore++;
            usrScore.textContent = `${userScore}`;
        } else {
            roundsResult.textContent = "It's a tie!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            roundsResult.textContent = "You win! Paper beats Rock";
            userScore++;
            usrScore.textContent = `${userScore}`;
        } else if (computerChoice === "scissor") {
            roundsResult.textContent = "You lose! Scissor beats Paper";
            computerScore++;
            cpuScore.textContent = `${computerScore}`;
        } else {
            roundsResult.textContent = "It's a tie!";
        }
    } else {
        if (computerChoice === "paper") {
            roundsResult.textContent = "You win! Scissor beats Paper";
            userScore++;
            usrScore.textContent = `${userScore}`;
        } else if (computerChoice === "rock") {
            roundsResult.textContent = "You lose! Rock beats Scissor";
            computerScore++;
            cpuScore.textContent = `${computerScore}`;
        } else {
            roundsResult.textContent = "It's a tie!";
        }
    }
}

function playAgain() {
    document.querySelector("#usrScore").textContent = "0";
    document.querySelector("#cpuScore").textContent = "0";
    document.querySelector(".rounds-result").textContent = "Choose one and start the game .. ";
    document.querySelector(".final-result").textContent = "First 5 point will win the game ..";    
}

function gameOver (userScore, computerScore) {
    document.querySelector(".rounds-result").textContent = "Game Over!";
    document.querySelector(".final-result").textContent = (
        `You ${userScore > computerScore ? "Win" : "lose"} the game!`
    );
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener("click", (e) => {

    if (userScore == 5 || computerScore == 5) {
        gameOver();
    } else {
        let userSelection = e.target.id;
        let computerSelection = getComputerChoice();
    
        playRound(userSelection, computerSelection);
    }
});

document.querySelector("button.play-again").addEventListener("click", () => {
  playAgain();
})
   




