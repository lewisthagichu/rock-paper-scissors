// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons')

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    let playerSelection = button.textContent;
    let computerSelection = getComputerChoice(); //Generate computer's choice

    playRound (playerSelection, computerSelection);
  });
});

// Function to generate computer's choice
function getComputerChoice() {
  const randomGuess = Math.floor(Math.random() * 1000);

  // Determine computer's choice based on the random number
  if (randomGuess % 3 === 0){
    return "rock";
  } else if (randomGuess % 3 === 1){
    return "scissors";
  } else {
    return "paper";
  }
}

// Function to play the game
function playRound (playerSelection, computerSelection) {
  const currentMatch = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`;

  if (playerSelection === computerSelection) {
    alert(`${currentMatch} It's a tie!`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    alert(`${currentMatch} Shiii You won!"}`);
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
    alert(`${currentMatch} Oh oh! You lost!"`);
    computerScore++;
  } 
}












































