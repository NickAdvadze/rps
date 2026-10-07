const container = document.querySelector("#container");

const Rbutton = document.createElement('button');
Rbutton.textContent = "ROCK";
Rbutton.value = 'rock';
const Pbutton = document.createElement('button');
Pbutton.textContent = "PAPPER";
Pbutton.value = 'paper';
const Sbutton = document.createElement('button');
Sbutton.textContent = "SCISSORS";
Sbutton.value = 'scissors';

const resultList = document.createElement('ol');

container.appendChild(Rbutton);
container.appendChild(Pbutton);
container.appendChild(Sbutton);
container.appendChild(resultList);



function getComputerChoice() {
    const answerItems = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * answerItems.length);
    return answerItems[randomIndex];
}

function getHumanChoice(a) {
    let userInput = a;
    return userInput;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    const pice = document.createElement('li')
    const result = document.createElement('p');
    const score = document.createElement('p');
    const winner = document.createElement('h1');
    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            result.textContent = `It's a tie! Both chose ${humanChoice}.`;
        } else if (humanChoice === 'rock' && computerChoice === 'rock') {
            result.textContent = "It's a tie! Both chose rock. ";
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            result.textContent = "You Win! Rock beats scissors. ";
            humanScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            result.textContent = "You Win! Scissors beats paper. ";
            humanScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            result.textContent = "You Win! Scissors beats paper. ";
            humanScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            result.textContent = "You Lose! Paper beats rock. ";
            computerScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            result.textContent = "You Lose! Scissors beats paper. ";
            computerScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            result.textContent = "You Lose! Rock beats scissors. ";
            computerScore ++;
            score.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
        }
        pice.appendChild(result);
        pice.appendChild(score);
        resultList.appendChild(pice);
    } else {
        if (humanScore > computerScore) {
            winner.textContent = "Dear friend you win!!!";
        }else if (humanScore < computerScore){
            winner.textContent = "Dear friend you lost!!!";
        }else {
            winner ="It's a draw!!!";
        }
        container.appendChild(winner);
        resultList.innerHTML = '';
        humanScore = 0;
        computerScore = 0;
    };
};

[Rbutton, Pbutton, Sbutton].forEach(button =>
    button.addEventListener('click', (event) => {
        playRound(getHumanChoice(event.target.value), getComputerChoice());
}));


