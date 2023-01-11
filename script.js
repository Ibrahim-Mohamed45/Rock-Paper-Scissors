// DOM variables
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const resultsText = document.querySelector('.resultsText');
const selectionButtons = document.querySelectorAll('.selectionButton');
const playAgainButton = document.querySelector('.playAgain')
const playerScoreSpan = document.querySelector('[data-player-score]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const finalWinner = document.querySelector('.finalWinner');
const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');

let player;
let computer;
let result; 

// Reloads the page when the play again button is pressed.
playAgainButton.addEventListener('click', () => {
    location.reload();
})

// Player choice
player = button.textContent;

// Computer Choice
function getComputerChoice(){
    // Random number between 1 to 3.
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1){
        computer = 'Rock';
    }
    if (randomNum == 2){
        computer = 'Paper';
    }
    if (randomNum == 3){
        computer = 'Scissors';
    }
}

