/*
     pseudocode
Create a getComputerChoice that return random play choice : "paper", "rock", "scissor"
Create a getUserChoice that return user input play choice
Declare userScore and computerScore variables
Create a playRound func with userChoice and computerChoice
        - make user choice case-insensitive
        - identify who beat the round
        - display a string "You lose! Paper beaats rock"
        - increment the score of the winner
Create a playGame func :
      - for 1 to 5 :
           - Call getComputerChoice and assign to  a variable called computerSelection
           - Call getUserChoice and assign to avariable called userSelection
           - Call playRound with computerSelection and userSelection
 
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "rock";
    } else {
        return "scissor";
    }
}

function getUserChoice() {
    let userInput = prompt("Enter your choice");
    return userInput;
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            computerChoice++;
        } else if (computerChoice === "scissor") {
            console.log("You win! Rock beats scissor")
            userScore++;
        } else {
            console.log("Equal! try again");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock")
            userScore++;
        } else if (computerChoice === "scissor") {
             console.log("You lose! Scissor beats Paper");
             computerScore++;
        } else {
            console.log("Equal! try again");
        }
    } else {
        if (computerChoice === "paper") {
            console.log("You win! Scissor beats paper");
            userScore++;
        } else if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissor");
            computerScore++;
        } else {
            console.log("Equal! try again");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let userSelection = getUserChoice();
        playRound(userSelection, computerSelection)
    }
    return userScore > computerScore ? "You win the game!" : "Computer win the game!";
}

let winnerPlayer = playGame();
console.log(winnerPlayer);