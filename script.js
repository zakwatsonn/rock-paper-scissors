let playerScore = 0;
let compScore = 0;

//function for initialising computer choice
function getComputerChoice() {
    let randomiser = Math.random() ;
    let computer = '';
    //make choice based on randomiser
    if (randomiser <= 1/3) {
        computer = 'rock';;
    } else if (randomiser > 1/3 && randomiser <= 1) {
        computer = 'paper';
    } else {
        computer = 'scissors';
    }
    return computer;
}

//function for acquiring user choice
function getPlayerChoice() {
    let player = prompt('Enter your choice');
    return player.toLowerCase();
}

//round function
function playRound(pChoice, cChoice) {
    if ((pChoice === 'rock' && cChoice === 'paper') || (pChoice === 'paper' && cChoice === 'scissors') || (pChoice === 'scissors' && cChoice === 'rock')) {
        console.log('computer wins');
        compScore ++;
    } else if ((pChoice === 'rock' && cChoice === 'scissors') || (pChoice === 'scissors' && cChoice === 'paper') || (pChoice === 'paper' && cChoice === 'rock')) {
        console.log('player wins');
        playerScore ++;
    } else {
        console.log('draw!');
    }
}
