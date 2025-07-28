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

// plays a full game with 5 rounds
// declares the winner at the end (and also returns the result)
function playGame() {
    // move playRound function and score variables into function scope
    // global score variables
    let humanScore = 0;
    let computerScore = 0;
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
    }

    // call playRound 5 times
    const numRounds = 5;
    for (let i = 0; i < numRounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}: ${humanChoice} VS. ${computerChoice}`)
        playRound(humanChoice, computerChoice);
    }

    // declare the winner or if there's a tie
    if (humanScore == computerScore) {
        console.log("Tie!");
        return "tie";
    } else if (humanScore > computerScore) {
        console.log("You win!");
        return "human";
    } else {
        console.log("The computer won!");
        return "computer";
    }
}

playGame();