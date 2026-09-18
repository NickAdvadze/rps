function getComputerChoice() {
    const answerItems = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerItems.length);
    return answerItems[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt('Enter your value: ').toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("It's a tie! Both chose rock.");
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! Rock beats scissors.");
        humanScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You Win! Scissors beats paper.");
        humanScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! Scissors beats paper.");
        humanScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! Paper beats rock.");
        computerScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You Lose! Scissors beats paper.");
        computerScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You Lose! Rock beats scissors.");
        computerScore ++;
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
    }
}



for (let i = 0; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
