const options = ['rock', 'paper', 'scissors'];
let playerSelectionDisplay;
const computerSelectionDisplay = document.getElementById('computer-selection');
let playerSelection;
let computerSelection;
let result;
const possibleChoices = document.querySelectorAll('img.choices');
const images = document.querySelector('div.content');
const resetBtn = document.createElement('button')
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');
const selections = document.querySelector('.selections');
const container = document.querySelector('div.container');
let playerScore = 0;
let computerScore = 0;
const scoreDisplay = document.querySelector('p.score');
const modalContainer = document.querySelector('div.modal-container');
const modalButton = document.querySelector('button.modal-result');
const modalH1 = document.querySelector('h1.result');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice(options);
    playerSelectionDisplay = document.createElement('img');
    playerSelectionDisplay.src = `images/${playerSelection}.png`;
    playerSelectionDisplay.id = 'player-selection';
    selections.appendChild(playerSelectionDisplay);
    createSection();
        interval = setInterval(changeBg, 50);
        setTimeout(stopBg, 1500);
    images.remove();
    h1.textContent = 'Fight!';
    setTimeout(() => {
        playRound(playerSelection, computerSelection);
        h2.textContent = result;
        container.appendChild(h2);
        scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        resetBtn.textContent = 'Play again';
        container.appendChild(resetBtn);
        if (playerScore == 5) {
            modalContainer.classList.add('show');
            modalH1.textContent = 'You beat the game!';
        } else if (computerScore == 5) {
            modalContainer.classList.add('show');
            modalH1.textContent = 'You lost. Try again?';
        }
    }, 1550);
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
        computerScore = computerScore + 1;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        result = ('You win! Rock beats scissors');
        playerScore = playerScore + 1;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        result = ('You win! Paper beats rock');
        playerScore = playerScore + 1;
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        result = ('Draw! Both chose paper');
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        result = ('You lose! Paper loses to scissors');
        computerScore = computerScore + 1;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        result = ('You lose! Scissors lose to rock');
        computerScore = computerScore + 1;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        result = ('You win! Scissors beat paper');
        playerScore = playerScore + 1;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        result = ('Draw! Both chose scissors');
    }
    return result
}

function reset() {
    playerSelectionDisplay.remove();
    resetBtn.remove();
    h2.remove();
    section.remove();
    bgImage.remove();
    h1.textContent = 'Choose your fighter';
    scoreDisplay.before(images);
}

resetBtn.addEventListener('click', function() {reset()});

let section = document.querySelector('.section');
let interval;
let bgImage;

function changeBg () {

const imagesArr = [
    'url("images/rock.png")',
    'url("images/paper.png")',
    'url("images/scissors.png")',
];

const bg = imagesArr[Math.floor(Math.random() * imagesArr.length)];
section.style.backgroundImage = bg;
}

function stopBg () {
clearInterval(interval);
section.style.backgroundImage = `url("images/${computerSelection}.png")`;
}

function createSection() {
    section = document.createElement('div');
    section.classList.add('section');
    bgImage = document.createElement('img')
    // bgImage.classList.add('bgImage');
    // bgImage.style.backgroundImage = 'images/bg.png';
    selections.appendChild(playerSelectionDisplay);
    selections.appendChild(section);
    // selections.appendChild(bgImage);
}

modalButton.addEventListener('click', () => {
    modalContainer.classList.remove('show');
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = '';
    reset();
})