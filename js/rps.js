const options = ['rock', 'paper', 'scissors'];
const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
let playerSelection;
let computerSelection;
let result;
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    playerSelectionDisplay.innerHTML = playerSelection;
    computerSelection = getComputerChoice(options);
    computerSelectionDisplay.innerHTML = computerSelection;
    playRound(playerSelection, computerSelection);
}))

function getComputerChoice (options) {
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        result = ('Draw! Both chose rock');
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        result = ('You lose! Rock loses to paper');
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        result = ('You win! Rock beats scissors');
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        result = ('You win! Paper beats rock');
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        result = ('Draw! Both chose paper');
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        result = ('You lose! Paper loses to scissors');
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        result = ('You lose! Scissors lose to rock');
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        result = ('You win! Scissors beat paper');
    } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        result = ('Draw! Both chose scissors');
    }
    resultDisplay.innerHTML = result;
}