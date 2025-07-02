let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userChoice = prompt("What is your choice? (rock, paper, scissors)", "");

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
        return "It's a tie!";
    }

    if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h === "scissors" && c === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function game() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    alert(`You chose: ${humanSelection}`);
    alert(`Computer chose: ${computerSelection}`);

    const result = playRound(humanSelection, computerSelection);
    alert(result);

    alert(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    console.log(result);
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);

    if (confirm("Play again?")) {
        game();
    } else {
        alert("Final Score:");
        alert(`You: ${humanScore} | Computer: ${computerScore}`);
        console.log("Final Score:");
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
    }
}

game();
