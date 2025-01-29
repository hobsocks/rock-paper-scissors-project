// Step 1: Write the logic to get the computer choice //
const computerSelection = getComputerChoice();
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(computerSelection);
// Step 2: Write the logic to get the user choice //
const humanSelection = getHumanChoice();
    function getHumanChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const promptMessage = 'Please choose either "rock", "paper", or "scissors".';
        let humanChoice = prompt(promptMessage);
        while (!choices.includes(humanChoice)) {
            humanChoice = prompt(promptMessage);
        }
        return humanChoice;
    }
// Step 4: Declare the players score variables //
// Step 5: Write the logic to play a single round //
// Step 6: Write the logic to play the entire game //