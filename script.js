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

