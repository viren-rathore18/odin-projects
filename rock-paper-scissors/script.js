let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userChoice = prompt("What is your choice?", "");

    if (!userChoice) {
        alert("You must input a value.");
        return getHumanChoice();
    }

    userChoice = userChoice.trim().toLowerCase();

    if (validChoices.includes(userChoice)) {
        return userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    } else {
        alert("Invalid Input! Please enter Rock, Paper, or Scissors");
        return getHumanChoice();
    }
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    const h = humanChoice.toLowerCase();
    const c = computerChoice.toLowerCase();

    if (h === c) {
        return "It's a tie";
    }

    if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h === "scissors" && c === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function game() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);

    if (confirm("Play again?")) {
        game();
    } else {
        console.log("Final Score:");
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    }
}

game();
