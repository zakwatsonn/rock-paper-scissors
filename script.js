let playerScore = 0;
let compScore = 0;
let resultsDisplay = document.querySelector('.resultsDisplay');

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
        resultsDisplay.textcontent = ('Player Chose ' + pChoice + ' and computer chose ' + cChoice + ' so computer wins')
        compScore ++;
    } else if ((pChoice === 'rock' && cChoice === 'scissors') || (pChoice === 'scissors' && cChoice === 'paper') || (pChoice === 'paper' && cChoice === 'rock')) {
        resultsDisplay.textContent = ('Player Chose ' + pChoice + ' and computer chose ' + cChoice + ' so player wins')
        playerScore ++;
    } else {
        resultsDisplay.textContent = ('draw!')
    }
    console.log('at the end of this round, the scores are: player: ' + playerScore + ', and computer: ' + compScore);
}

//using event listeners with buttons
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const sciButton = document.querySelector('.scissors')

rockButton.addEventListener('click', e => {
    playRound('rock', getComputerChoice())
})
paperButton.addEventListener('click', e => {
    playRound('paper', getComputerChoice())
})
sciButton.addEventListener('click', e => {
    playRound('scissors', getComputerChoice())
})