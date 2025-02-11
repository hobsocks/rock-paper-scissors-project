const options = ['rock', 'paper', 'scissors'];

//Function that gets Computer choice//
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
//Function to check the winner of the round//
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'Tie';
    }
    else if (
       (playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        return 'Player';   
    }
    else {
        return 'Computer';
    }
}

//Function that plays a round of the game//
function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie'){
        return 'It is a Tie';
    }
    else if (result == 'Player'){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//Function that prompts player and gets player choice//
function getPlayerChoice(){
    let choice = prompt('Enter Rock, Paper or Scissors').toLowerCase();
    while (!options.includes(choice)){
        choice = prompt('Invalid choice. Enter Rock, Paper or Scissors').toLowerCase();
    }
    return choice;
}

//Function that calculates player and computer scores and determines the winner of the game//
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
});

