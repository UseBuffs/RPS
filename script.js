/* cpu picks rock paper or scissors */

function getComputerChoice () {
    const choices = ["Rock","Paper","Scissors"]
    let random = Math.floor((Math.random() * choices.length))
    let randomSelection = choices[random]
    return randomSelection;
}

/* player selects and a result is given */

function playRound() {
    let computerChoice = getComputerChoice()
    
    let playerSelection = prompt("Rock Paper or Scissors?");

    if (playerSelection == computerChoice) 
        return `Draw! you both drew ${playerSelection}`;
    else if ((computerChoice == "Rock" && playerSelection == "Scissors") ||
            (computerChoice == "Paper" && playerSelection == "Rock") ||
            (computerChoice == "Scissors" && playerSelection == "Paper"))
                return `You lose... ${computerChoice} beat your ${playerSelection}`;
    else return `You win! Your ${playerSelection} beat ${computerChoice}`;

}

function game() {
    for (let i = 0; i < 5; i++){
    playRound();
    console.log(playRound())
}
}

game()


