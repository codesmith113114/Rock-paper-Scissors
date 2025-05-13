let humanScore = 0;
let computerScore = 0;

//logic to get computer Choice
function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "rock";
  }
  if (num == 1) {
    return "paper";
  }
  if (num == 2) {
    return "scissors";
  }
}

//Dom manipulation
const divForAnnouncement = document.createElement("div");
const divForHumanScore = document.createElement("div");
const divForComputerScore = document.createElement("div");
const divForResult = document.createElement("div");
const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorButton = document.querySelector("#scissorsbtn");

rockButton.addEventListener("click", () => {
  return playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  return playRound("paper", getComputerChoice());
});

scissorButton.addEventListener("click", () => {
  return playRound("scissors", getComputerChoice());
});

//logic of playround
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    divForResult.innerText = "it is a tie";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }

  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    divForResult.innerText = "You win! Rock beats scissors";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    divForResult.innerText = "You lose! Paper beats rock";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    divForResult.innerText = "You win! Paper beats rock";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    divForResult.innerText = "You lose! Scissors beats paper";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    divForResult.innerText = "You win! Scissors beats papr";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    divForResult.innerText = "You lose! Rock beats scissos";
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    console.log("Please enter a valid choice");
    document.querySelector("body").appendChild(divForResult);
    document.querySelector("body").appendChild(divForComputerScore);
    document.querySelector("body").appendChild(divForHumanScore);
  }
  divForComputerScore.innerText = `opponenet : ${computerScore}`;
  divForHumanScore.innerText = `you : ${humanScore}`;
  if (computerScore == 5) {
    divForAnnouncement.innerText = "you loose";
    document.querySelector("body").appendChild(divForAnnouncement);
  }

  if (humanScore == 5) {
    divForAnnouncement.innerText = "you win";
    document.querySelector("body").appendChild(divForAnnouncement);
  }
  if (humanScore == computerScore) {
    divForAnnouncement.innerText = "TIE,Lucky you!";
    document.querySelector("body").appendChild(divForAnnouncement);
  }
}
