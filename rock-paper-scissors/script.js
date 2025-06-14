function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"];
    let userChoice = prompt("What is your choice ?", "")
   
    if(!userChoice){
        alert("You must input a value.");
        return  getHumanChoice(); //ask again
    }

    userChoice = userChoice.trim().toLowerCase();

    if(validChoices.includes(userChoice)) {
        return userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    } else {
        alert("Invalid Input , enter Rock ,Paper, Scissors");
        return getHumanChoice(); //ask again
    }
}


//generate random computer choice function 
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
   
    return choices[randomIndex]
}


//setup playing round function 

function playRound(humanChoice, computerChoice) {
   
     if (humanChoice === computerChoice){
        return "It's a tie"
     }

     if (
        (humanChoice === "Rock"  && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++
        return `You win! ${humanChoice} beats ${computerChoice}`;
      }else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`
      }
}

function game() {
    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);

console.log(playRound(humanSelection, computerSelection));
console.log(`Score - You: ${humanScore}  | Computer: ${computerScore}` )

  if(confirm("Play again?")){
    game();
  } else {
    console.log("Final Score:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
  }

}


let humanScore = 0;
let computerScore = 0;
game();

