let playerScore = 0;
let compScore = 0;

//function for initialising computer choice
function getComputerChoice() {
    let randomiser = 0;
    randomiser = Math.random();
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
        console.log('player chose ' + pChoice + ' and computer chose ' + cChoice + ', so computer wins');
        compScore ++;
    } else if ((pChoice === 'rock' && cChoice === 'scissors') || (pChoice === 'scissors' && cChoice === 'paper') || (pChoice === 'paper' && cChoice === 'rock')) {
        console.log('player chose ' + pChoice + ' and computer chose ' + cChoice + ', so player wins');
        playerScore ++;
    } else {
        console.log('draw!');
    }
    console.log('at the end of this round, the scores are: player: ' + playerScore + ', and computer: ' + compScore);
}

//game function
function playGame() {
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    if (playerScore > compScore) {
        console.log('after 5 rounds, player wins!');
    } else if (playerScore < compScore) {
        console.log('after 5 rounds, computer wins!');
    } else if (playerScore === compScore) {
        console.log('after 5 rounds, its a draw!');
    }
}

playGame();