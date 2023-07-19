const selectionBtn = document.querySelectorAll('[data-selection]');

selectionBtn.forEach(selectionBtn => {
    selectionBtn.addEventListener('click', e => {
        const selectionChoice = selectionBtn.dataset.selection;
        game(selectionChoice);
    })
})

const SELECTIONS = ['rock','paper','scissors'];

function computerSelection() {
    const randomNum = Math.floor(Math.random() * 3);
    return SELECTIONS[randomNum];
}

let computerScore = 0;
let userScore = 0;

function game(selection) {
    console.log("User choice : " ,selection + "| Computer choice : " + computerSelection());
    switch(selection+computerSelection()) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            console.log("User wins");
            console.log(`User score : ${userScore} | Computer score : ${computerScore}}`);
            userScore++;
            updateScore();
            outputBoxTextUpdaterWon(selection);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            console.log("Computer wins");
            console.log(`User score : ${userScore} | Computer score : ${computerScore}}`);
            computerScore++;
            updateScore();
            outputBoxTextUpdaterLoss(selection);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            console.log("Draw");
            console.log(`User score : ${userScore} | Computer score : ${computerScore}}`);
            updateScore();
            outputBoxTextUpdaterDraw(selection);
            break;
        default:
            console.log("Error");
            outputBoxTextUpdaterError(sel);
    }
}

function updateScore() {
    const playerScoreElement = document.querySelector('.outScore.userScore');
    const computerScoreElement = document.querySelector('.outScore.compScore');
    playerScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

function resetScore() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    const outputBoxText = document.querySelector('.outputBoxText');
    outputBoxText.textContent =`Let's play!`;
}

function outputBoxTextUpdaterWon(selectionChoice){
    const outputBoxText = document.querySelector('.outputBoxText');
    outputBoxText.textContent =`You won this round! 🎉 \n Your choice was ${selectionChoice} and computer's choice was ${computerSelection()}`;
}

function outputBoxTextUpdaterLoss(selectionChoice){
    const outputBoxText = document.querySelector('.outputBoxText');
    outputBoxText.textContent =`You lost this round! 🥲 \n Your choice was ${selectionChoice} and computer's choice was ${computerSelection()}`;
}

function outputBoxTextUpdaterDraw(selectionChoice){
    const outputBoxText = document.querySelector('.outputBoxText');
    outputBoxText.textContent =`This round ended up in a DRAW! \n Your choice was ${selectionChoice} and computer's choice was ${computerSelection()}`;
}

function outputBoxTextUpdaterError(selectionChoice){
    const outputBoxText = document.querySelector('.outputBoxText');
    outputBoxText.textContent =`Error:1 : unknown ref(s) detected. 🎉 \n Your choice was ${selectionChoice} and computer's choice was ${computerSelection()}`;
}