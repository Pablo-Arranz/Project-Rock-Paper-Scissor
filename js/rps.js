const options = ['rock', 'paper', 'scissors'];
const playerSelectionDisplay = document.getElementById('player-selection');
const computerSelectionDisplay = document.getElementById('computer-selection');
let playerSelection;
let computerSelection;
let result;
const possibleChoices = document.querySelectorAll('img.choices');
const images = document.querySelector('div.container');
const resetBtn = document.createElement('button')
const h1 = document.querySelector('h1');
const h2 = document.createElement('h2');
const selections = document.querySelector('.selections')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice(options);
    playerSelectionDisplay.src = `images/${playerSelection}.png`;
    
    document.body.appendChild(computerSelectionDisplay);
    createSection();
        interval = setInterval(changeBg, 50);
        setTimeout(stopBg, 1500);
    playRound(playerSelection, computerSelection);
    h2.textContent = result;
    document.body.appendChild(h2);
    h1.remove();
    images.remove();
    resetBtn.textContent = 'Play again';
    document.body.appendChild(resetBtn);
    
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
    console.log(result);
    return result
}

function reset() {
    playerSelectionDisplay.remove();
    computerSelectionDisplay.remove();
    resetBtn.remove();
    h2.remove();
    section.remove();
    bgImage.remove();
    document.body.appendChild(h1);
    document.body.appendChild(images);
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
    bgImage.classList.add('bgImage');
    bgImage.style.backgroundImage = 'images/bg.png';
    selections.appendChild(playerSelectionDisplay);
    selections.appendChild(section);
    selections.appendChild(bgImage);
}