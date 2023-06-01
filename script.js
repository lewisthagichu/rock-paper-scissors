const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

let resultContainer = document.querySelector('.results-container');
let restartBtn = document.querySelector('.restart-btn');


options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.value;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();
    if (checkWinner()) {
      declareWinner();
    }
  });
});

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    displayResults(`It's a tie! Both you and the computer chose ${pInput}`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      displayResults("Nice move! You won. Rock smashes scissors.");
      playerScore++;
    } else {
      displayResults("Hard luck! The computer won. Paper smothers your rock.");
      computerScore++;
    }
  }
  //Check for Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      displayResults("Victory is paper-thin! Rock couldn't tear through paper.");
      playerScore++;
    } else {
      displayResults("Bummer! The computer won. Your paper got snipped by scissors.");
      computerScore++;
    }
  }
  //Check for Scissors
  else if (pInput === "Scissors") {
    if (cInput === "Paper") {
      displayResults("Sharp choice! You won. Scissors cut through paper.");
      playerScore++;
    } else {
      displayResults("Rock reigns supreme! The computer won. Your scissors couldn't break through.");
      computerScore++;
    }
  }
}

// function to display results after each round
function displayResults(str) {
  resultContainer.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  resultContainer.textContent = str;
}

function updateScore() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    resultContainer.style.fontSize = "25px";
    return true;
  }
  return false;
}

// function to declare winner
function declareWinner() {
  if (playerScore > computerScore) {
    resultContainer.textContent = "Victory is yours! With your strategic choices, you have proven to be the true master of rock, paper, scissors."
  } else if (playerScore < computerScore) {
    resultContainer.textContent = "A tough defeat! Despite your best efforts, the computer's mastery of rock, paper, scissors has proven too formidable to overcome."
  }

  restartBtn.style.display = "inline-block";
  restartBtn.addEventListener("click", function() {
    playerScore = computerScore = 0;
    updateScore();
    restartBtn.style.display = "none";
    resultContainer.textContent = '';
    resultContainer.style.fontSize = "20px";
  })
}