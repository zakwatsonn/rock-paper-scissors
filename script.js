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
    
}
