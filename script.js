function getComputerChoice(){
    const choice = ["rock", "paper", "scissor"];

    const computerChoice = Math.floor(Math.random() * choice.length);
    return choice[computerChoice];
}


function startRound (playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    if(player === "rock"){
        if(computerSelection === "rock"){
            console.log("It's a tie!");
        }
        if(computerSelection === "paper"){
            console.log("You lose! Paper beats your Rock");
        }
        if(computerSelection === "scissor"){
            console.log("You won! your Rock beats Scissors!");
        }
    }
    if(player === "paper"){
        if(computerSelection === "rock"){
            console.log("You Won! your Paper beats rock!");
        }
        if(computerSelection === "paper"){
            console.log("It's a tie!");
        }
        if(computerSelection === "scissor"){
            console.log("You lose! Scissor beats your Paper");
        }
    }
    if(player === "scissors"){
        if(computerSelection === "rock"){
            console.log("You Lose! Rock beats your Scissors");
        }
        if(computerSelection === "paper"){
            console.log("You Won! your Scissors beat paper");
        }
        if(computerSelection === "scissor"){
            console.log("It's a tie!");
        }
    }
}


function game () {
    for (let round = 1; round <= 5; round++) {
        console.log("round " + round);
        const playerSelection = prompt("ROCK, PAPER or SCISSORS?");
        const computer = getComputerChoice();
        console.log(startRound(playerSelection,computer)); 
    }

}
console.log(game());
