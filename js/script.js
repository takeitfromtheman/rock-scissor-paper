const results = ["Rock", "Paper", "Scissors"]
let computerScore = 0;
let humanScore = 0;


function getRandomInt() {
    return Math.floor(Math.random() * results.length);
}

function getComputerChoice(){
    const resultIndex = getRandomInt();
    return results[resultIndex];
    
}

function getHumanChoice(){
    const answer = prompt("Choose: Rock, paper or scissors");
    return answer;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    if ( humanChoice === computerChoice ) {
        console.log(`Tie!`);
    }
    switch (humanChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper": {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            break;
        }
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock": {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            break;
        }
    }
}
playRound();