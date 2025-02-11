playerScore = 0;
computerScore = 0;
const options = ['rock', 'paper', 'scissors'];
const outcomeDiv = document.querySelector('.outcome');

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
const  playRound = (playerSelection, computerSelection) =>{
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie'){
        p.innerText = `It's a tie! You both chose ${playerSelection}`;
        outcomeDiv.appendChild(p);
    }
    else if (result == 'Player'){
        playerScore++;
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    }

    else{
        computerScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        outcomeDiv.appendChild(p);

    }
}

const checkForWinner = (playerScore, computerScore) => {
    console.log(playerScore, computerScore);
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won ${playerScore} to ${computerScore} Great job!`;
        outcomeDiv.append(h2);
    }
    if (computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You lost ${playerScore} to ${computerScore} Better luck next time!`;
        outcomeDiv.append(h2);
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
const p = document.createElement('p');

rockButton.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
});
paperButton.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);

});
scissorsButton.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);

});

