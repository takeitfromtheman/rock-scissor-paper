function playGame(rounds) {
    const results = ["Rock", "Paper", "Scissors"]

    let computerScore = 0;
    let humanScore = 0;


    function getRandomResult() {
        return Math.floor(Math.random() * results.length);
    }
    
    function getComputerChoice() {
        const resultIndex = getRandomResult();
        return results[resultIndex];
    }

    function getHumanChoice() {
        return prompt("Choose: Rock, paper or scissors");
    }

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
        if (humanChoice === computerChoice) {
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
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
    console.log(`Your score: ${humanScore}, \nComputer Score: ${computerScore}`);
    console.log(`${
        (humanScore > computerScore) ? `You win the game!` :
            (humanScore < computerScore) ? `You lose the game!` :
                `Nobody won the game!`
    }`)
}
playGame(5)