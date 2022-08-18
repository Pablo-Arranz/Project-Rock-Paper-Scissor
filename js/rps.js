const options = ['rock', 'paper', 'scissors'];

function getComputerChoice (options) {
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if ((playerChoice === 'rock') && (computerSelection === 'rock')) {
        return('Draw! Both chose rock');
    } else if ((playerChoice === 'rock') && (computerSelection === 'paper')) {
        return('You lose! Rock loses to paper');
    } else if ((playerChoice === 'rock') && (computerSelection === 'scissors')) {
        return('You win! Rock beats scissors');
    } else if ((playerChoice === 'paper') && (computerSelection === 'rock')) {
        return('You win! Paper beats rock');
    } else if ((playerChoice === 'paper') && (computerSelection === 'paper')) {
        return('Draw! Both chose paper');
    } else if ((playerChoice === 'paper') && (computerSelection === 'scissors')) {
        return('You lose! Paper loses to scissors');
    } else if ((playerChoice === 'scissors') && (computerSelection === 'rock')) {
        return('You lose! Scissors lose to rock');
    } else if ((playerChoice === 'scissors') && (computerSelection === 'paper')) {
        return('You win! Scissors beat paper');
    } else if ((playerChoice === 'scissors') && (computerSelection === 'scissors')) {
        return('Draw! Both chose scissors');
    }
}

let playerScore = 0;
let computerScore = 0;
function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('What is your selection?');
        const computerSelection = getComputerChoice(options);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes('win')) {
            playerScore = playerScore + 1;
            console.log('The score is ' + playerScore + '-' + computerScore);
        } else if (playRound(playerSelection, computerSelection).includes('lose')) {
            computerScore = computerScore + 1;
            console.log('The score is ' + playerScore + '-' + computerScore);
        } else {
            console.log('The score is ' + playerScore + '-' + computerScore);
        }
    }
    if (playerScore > computerScore) {
        return('You win the game!');
    } else if (playerScore < computerScore) {
        return('You lose');
    } else {
        return('It\'s a tie')
    }
}