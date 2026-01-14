let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const botScorePara = document.querySelector("#bot");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  const botChoice = getBotChoice();

  if (userChoice === botChoice) {
    msg.textContent = `It's a draw! Bot also chose ${botChoice}`;
  } else if (
    (userChoice === "rock" && botChoice === "scissor") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissor" && botChoice === "paper")
  ) {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `You win! Bot chose ${botChoice}`;
  } else {
    botScore++;
    botScorePara.textContent = botScore;
    msg.textContent = `You lose! Bot chose ${botChoice}`;
  }
}

function getBotChoice() {
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
}
