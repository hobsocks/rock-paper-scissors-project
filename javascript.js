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
function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome to Rock, Paper, Scissors!');
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
        if(checkWinner(playerSelection, computerSelection) == 'Player'){
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == 'Computer'){
            computerScore++;
        }
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
    }


    if(playerScore > computerScore){
        console.log('You Win the Game!');
    }
    else if (playerScore < computerScore){
        console.log('You Lose the Game!');
    }
    else{
        console.log('It is a Tie Game!');
    }
}

game()