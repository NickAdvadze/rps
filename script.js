function getComputerChoice() {
    const answerItems = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerItems.length);
    return answerItems[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt('Enter your value: ').toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return false;
    }
}

console.log(getHumanChoice());