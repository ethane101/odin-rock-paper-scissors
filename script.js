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
