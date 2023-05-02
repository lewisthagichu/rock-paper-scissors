// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

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

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
  // Check for a tie
  if (playerSelection === computerSelection) {
    playerScore = playerScore;
    computerScore = computerScore;
    return "Tie! Try again";
  } 
  // Check for player wins
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win! Scissors beat Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } 
  // Check for computer wins
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } 
}

// Play the game
while (computerScore < 5 && playerScore < 5) {
  // Get user's choice and computer's choice
  let playerSelection = prompt("Rock, Paper or Scissors: ").toLowerCase();
  let computerSelection = getComputerChoice();

  // Play a round and log the result and scores
  console.log(playRound(playerSelection, computerSelection));
  console.log("Computer score:", computerScore);
  console.log("Player score:", playerScore);
}

// Declare the winner
if (playerScore == 5) {
    console.log("Congratulations! You win!");
} else if (computerScore == 5) {
    console.log("Sorry, you lost :(");
}



