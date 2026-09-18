function getComputerChoice() {
    const answerItems = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerItems.length);
    return answerItems[randomIndex];
}

