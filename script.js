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

selectionButtons.forEach(button => button.addEventListener('click', function buttonF() { 
    // Player choice
    player = button.textContent;
    getComputerChoice();
    playerChoice.textContent = `Player Choice: ${player}`;
    computerChoice.textContent = `Computer Choice: ${computer}`;
    resultsText.textContent = `Result: ${compareChoices()}`;
    if (resultsText.textContent == 'Result: Player wins!'){
        incrementScore(playerScoreSpan);
    }
    if (resultsText.textContent == 'Result: Computer wins!'){
        incrementScore(computerScoreSpan);
    }
    if (playerScoreSpan.textContent == 5){
        finalWinner.textContent = 'The player has won this battle';
    }
    if (computerScoreSpan.textContent == 5){
        finalWinner.textContent = 'The computer has won this battle';
    }
    if (computerScoreSpan.textContent == 5 || playerScoreSpan.textContent == 5){
        rockButton.setAttribute('disabled', 'disabled');
        paperButton.setAttribute('disabled', 'disabled');
        scissorsButton.setAttribute('disabled', 'disabled');
    }
}))

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

// All possible choices and thier respective outcomes.
function compareChoices(){
    if (player == computer){
        return 'Tie!';
    }
    else if ((player === 'Rock' && computer === 'Scissors') ||
            (player === 'Scissors' && computer === 'Paper') ||
            (player === 'Paper' && computer === 'Rock')) {
            
        return 'Player wins!';
    }
    else if ((computer === 'Rock' && player === 'Scissors') ||
            (computer === 'Scissors' && player === 'Paper') ||
            (computer === 'Paper' && player === 'Rock')) {

        return 'Computer wins!';
    } 
}      

// Increases either player or computer score depending on the outcome.
function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

