const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.value;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    updateMove(pInput, cInput);
    compareInputs(pInput, cInput);
    updateScore();
    if (checkWinner()) {
      playerScore = computerScore = 0;
      updateScore();
    }
  });
});

function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;
  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissors") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  //Check for Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
  //Check for Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      playerScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      computerScore++;
    }
  }
}

function updateScore() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}

function updateMove (pInput, cInput) {
  document.getElementById("p-move").src = `./img/${pInput}.png`;
  document.getElementById("c-move").src = `./img/${cInput}.png`;
}