const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const text = document.querySelector('#text');
const result = document.querySelector('#result');
const hero = document.querySelector('.hero');

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

const playerCounter = document.querySelector('#playerCounter');
const computerCounter = document.querySelector('#computerCounter');

const playerFirstPoint = document.querySelector("#left-1");
const playerSecondPoint = document.querySelector("#left-2");
const playerThirdPoint = document.querySelector("#left-3");
const playerFourthPoint = document.querySelector("#left-4");
const playerFifthPoint = document.querySelector("#left-5");

const computerFirstPoint = document.querySelector("#right-1");
const computerSecondPoint = document.querySelector("#right-2");
const computerThirdPoint = document.querySelector("#right-3");
const computerFourthPoint = document.querySelector("#right-4");
const computerFifthPoint = document.querySelector("#right-5");

const endWindow = document.querySelector(".end-window");
const endMessage = document.querySelector("#endMessage");
const playAgain = document.querySelector("#playAgain");

const reset = document.querySelector("#reset");


let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener('click', function() { playRound('rock') });
paper.addEventListener('click', function() { playRound('paper') });
scissors.addEventListener('click', function() { playRound('scissors') });

reset.addEventListener('click', resetGame);
playAgain.addEventListener('click', resetGame);



function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3 + 1);
    let computerChoice;
    if (randomChoice === 1) {
        computerChoice = "paper";
    } else if (randomChoice === 2) {
        computerChoice = "scissors";
    } else {
        computerChoice = "rock";
    }
    return computerChoice;
}

function playRound(choice) {
    let playerSelection = choice;

    let computerChoice = getComputerChoice();
    let winner;
    text.innerText = `You choose ${playerSelection}, the computer chooses ${computerChoice}!`;

    if (playerSelection === "scissors") {
        if (computerChoice === "paper") {
            result.innerText = "Player wins!";
            winner = "player";
        } else if (computerChoice === "rock") {
            result.innerText = "Computer wins!";
            winner = "computer";
        } else if (computerChoice === "scissors") {
            result.innerText = "That's a tie! Keep playing!";
            winner = "tie";
        }
    } else if (playerSelection === "rock") {
        if (computerChoice === "scissors") {
            result.innerText = "Player wins!";
            winner = "player";
        } else if (computerChoice === "paper") {
            result.innerText = "Computer wins!";
            winner = "computer";
        } else if (computerChoice === "rock") {
            result.innerText = "That's a tie! Keep playing!";
            winner = "tie";
        }
    } else if (playerSelection === "paper") {
        if (computerChoice === "rock") {
            result.innerText = "Player wins!";
            winner = "player";
        } else if (computerChoice === "scissors") {
            result.innerText = "Computer wins!";
            winner = "computer";
        } else if (computerChoice === "paper") {
            result.innerText = "That's a tie! Keep playing!";
            winner = "tie";
        }
    }
    
    if (winner === 'player' ) {
        playerPoints++;
        playerCounter.innerText = playerPoints;

        switch(playerPoints) {
            case 1:
                playerFirstPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("player"); 
                break;
            case 2:
                playerSecondPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("player");
                break;
            case 3:
                playerThirdPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("player");
                break;
            case 4:
                playerFourthPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("player");
                break
            case 5:
                playerFifthPoint.style.backgroundColor = '#FDE12D';
                endGame("player");
                break;
        }

    } else if (winner === 'computer') {
        computerPoints++
        computerCounter.innerText = computerPoints;

        switch(computerPoints) {
            case 1:
                computerFirstPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("computer");
                break;
            case 2:
                computerSecondPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("computer");
                break;
            case 3:
                computerThirdPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("computer");
                break;
            case 4:
                computerFourthPoint.style.backgroundColor = '#FDE12D';
                roundAnimation("computer");
                break
            case 5:
                computerFifthPoint.style.backgroundColor = '#FDE12D';
                endGame("computer");
                break;
        }
    }

}

function roundAnimation(winner) {
    hero.style.pointerEvents = 'none';
    console.log(winner);

    if (winner === "player") {
        computer.style.filter = "grayscale(100%)";
    } else if (winner === "computer") {
        player.style.filter = "grayscale(100%)";
    }

    setTimeout(endRoundAnimation, 1000);
}

function endRoundAnimation() {
    hero.style.pointerEvents = 'auto';
    computer.style.filter = "none";
    player.style.filter = "none";
}

function endGame(winner) {
    hero.style.filter = "blur(5px)";
    hero.style.pointerEvents = "none";
    endWindow.style.visibility = "visible";

    if (winner === "player") {
        endMessage.innerText = "Congratulations, you won!"
    } else if (winner === "computer") {
        endMessage.innerText = "Sorry! Better luck next time!"
    }
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;

    playerCounter.innerText = "0";
    computerCounter.innerText = "0";

    result.innerText = "Let's play!";

    playerFirstPoint.style.backgroundColor = '#FFF3F0';
    playerSecondPoint.style.backgroundColor = '#FFF3F0';
    playerThirdPoint.style.backgroundColor = '#FFF3F0';
    playerFourthPoint.style.backgroundColor = '#FFF3F0';
    playerFifthPoint.style.backgroundColor = '#FFF3F0';

    computerFirstPoint.style.backgroundColor = '#FFF3F0';
    computerSecondPoint.style.backgroundColor = '#FFF3F0';
    computerThirdPoint.style.backgroundColor = '#FFF3F0';
    computerFourthPoint.style.backgroundColor = '#FFF3F0';
    computerFifthPoint.style.backgroundColor = '#FFF3F0';

    hero.style.pointerEvents = 'auto';
    hero.style.filter = 'blur(0)';
    endWindow.style.visibility = 'hidden';
}