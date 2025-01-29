const options = ['Rock', 'Paper', 'Scissors'];

function getcomputerChoice(){
    const choice = options[Math.random() * options.length];
}

getcomputerChoice();