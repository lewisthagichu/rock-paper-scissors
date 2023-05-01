/* Pseudocode
* Computer generates random choice
* Get user input
* Compare user's input against computer's choice and return a string that declares a winner
* Repeat 5 times
*/

//const prompt = require("prompt-sync")();

// Genereate random choice from computer
function getComputerChoice() {
    const randomGuess = Math.floor(Math.random() * 1000);

    if (randomGuess % 3 === 0){
        return "rock";
    } else if (randomGuess % 3 === 1){
        return "scissors";
    } else {
        return "paper";
    }
}

// Get user's and computer's choice
let playerSelection = prompt("Rock, Paper or Scissors: ").toLowerCase();
let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! Try again";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beat Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    } 
}

console.log(playRound(playerSelection, computerSelection));
