// global score variables
let humanScore = 0;
let computerScore = 0;

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

// control flow for playing one round of the game
function playRound(humanChoice, computerChoice) {
    // see who wins the round
    let winningPairs = {"rock" : "scissors", "scissors" : "paper", "paper":"rock"};
    let winner = ""; // set to "human", "computer", or "tie"

    if (winningPairs[humanChoice] == computerChoice) {
        winner = "human";
    } else if (winningPairs[computerChoice] == humanChoice) {
        winner = "computer";
    } else {
        winner = "tie";
    }
    
    // award points based on who wins
    if (winner != "tie") {
        if (winner == "human") {
            humanScore++;
        } else {
            computerScore++;
        }
    }
    console.log(`Winner: ${winner} <= ${humanChoice} VS. ${computerChoice}`);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

// test playRound() function
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}