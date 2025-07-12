const choices = ["rock", "paper", "scissors"];
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const resultEl = document.getElementById("result");

let userScore = 0;
let compScore = 0;

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    playRound(userChoice);
  });
});

function playRound(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  const winner = getWinner(userChoice, compChoice);

  if (winner === "user") {
    userScore++;
    resultEl.textContent = `You win! ${userChoice} beats ${compChoice}`;
  } else if (winner === "computer") {
    compScore++;
    resultEl.textContent = `You lose! ${compChoice} beats ${userChoice}`;
  } else {
    resultEl.textContent = `It's a draw! You both chose ${userChoice}`;
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
}

function getWinner(user, comp) {
  if (user === comp) return "draw";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
}
