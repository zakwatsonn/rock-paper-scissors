//function for initialising computer choice
function getComputerChoice() {
    let randomiser = Math.random() ;
    
    //make choice based on randomiser
    if (randomiser <= 1/3) {
        return ('rock');
    } else if (randomiser >= 1/3 && randomiser <= 1) {
        return ('paper');
    } else {
        return ('scissors');
    }
}

//function for acquiring user choice
function getPlayerChoice() {
    let player = prompt('Enter your choice');
    return player.toLowerCase();
}
