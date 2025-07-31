// randomly returns rock, paper, or scissors
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3); // integer from [0, 2]
    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "unexpected behavior"
    }
}

// gets rock, paper, or scissors from the human player (case-insensitive)
function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors: ").toLowerCase();    
}

// play a single round
function playRound(humanChoice, computerChoice) {
    // see who wins the round
    let winningPairs = {"rock" : "scissors", "scissors" : "paper", "paper":"rock"};
    let winner = ""; // set to "human", "computer", or "tie"

    // decide winner message
    if (winningPairs[humanChoice] == computerChoice) {
        winner = "YOU WIN! :)";
    } else if (winningPairs[computerChoice] == humanChoice) {
        winner = "YOU LOSE! :(";
    } else {
        winner = `IT'S A TIE! :))`;
    }

    return winner;
}

const control = document.querySelector("#control");
const winningResult = document.querySelector("#winning-result");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const humanScoreDisplay = document.querySelector("#human-score-display");
const computerScoreDisplay = document.querySelector("#computer-score-display");

let humanScore = 0;
let computerScore = 0;

control.addEventListener('click', (event) => {
    let target = event.target;
    let humanChoice = target.id;
    let computerChoice = getComputerChoice();

    // update scores section
    let winnerMessage = playRound(humanChoice, computerChoice);
    winningResult.textContent = winnerMessage;
    computerChoiceDisplay.innerHTML = `Computer chose: <b>${computerChoice}</b>`;

    // award points based on who wins
    if (winnerMessage != `IT'S A TIE! :))`) {
        if (winnerMessage == "YOU WIN! :)") {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    // update scores section
    humanScoreDisplay.textContent = `Human: ${humanScore}`;
    computerScoreDisplay.textContent = `Human: ${computerScore}`;

});

// In our UI, the player should be able to play the game 
// by clicking on buttons rather than typing their answer in a prompt:

// 1. For now, remove the logic that plays exactly five rounds.

// 2. Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound 
// function with the correct playerSelection every time a button 
// is clicked. (you can keep the console.logs for this step)

// 3. Add a div for displaying results and change all of your console.logs 
// into DOM methods.

// 4. Display the running score, and announce a winner of the game once 
// one player reaches 5 points.
