
let humanScore = 0;
let computerScore = 0;
//logic to get computer Choice

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3)
  if (num == 0) {
    return "rock"
  }
  if (num == 1) {
    return "paper"
  }
  if (num == 2) {
    return "scissors"
  }
}


//logice to get player choice
function getHumanChoice() {
  const input = prompt("Rock paper scissors")
  return input.toLowerCase()
}

//logic of playround
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice()

  if (humanChoice == computerChoice) {
    return "It's a tie!"
  }

  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "You win! Rock beats scissors"
  }
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You lose! Paper beats rock"
  }
  if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You win! Paper beats rock"
  }
  if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper"
  }
  if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return "You win! Scissors beats paper"
  }
  if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You lose! Rock beats scissors"
  }
  if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
    return "Please enter a valid choice"
  }

}
function playGame(n) {
  for (let i = 0; i < n; i++) {
    const result = playRound()
    console.log(result);
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame(5)

