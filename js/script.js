function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    const randomInt3 = getRandomInt(3);
    switch(randomInt3){
        case 0: return "Rock"
        case 1: return "Paper"
        case 2: return "Scissors"
    }
}
let computerChoice = getComputerChoice();
console.log(computerChoice);