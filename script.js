// establish game choice list and randomizer

const choices = ["Rock", "Paper", "Scissors"];

const randomChoice = choices[Math.floor(Math.random() * choices.length)];

// determine the computer choice (randomly decided)

function getComputerChoice() {
    return randomChoice
}

let computerSelection = getComputerChoice();

// prompt player for their choice

let playerSelection = window.prompt('Please type Rock, Paper, or Scissors');

/* take computer choice, player choice, and play one round 
of the game - returning a string that declares the winner 
(example: "You lose Paper beats Rock") */

function singleRound(computerSelection, playerSelection) {
    if (computerSelection ==='Rock' && playerSelection ==='Rock') {
        alert ("Tie, both selected Rock");
    } else if (computerSelection ==='Paper' && playerSelection ==='Paper') { 
        alert ("Tie, both selected Paper");
    } else if (computerSelection ==='Scissors' && playerSelection ==='Scissors') { 
        alert ("Tie, both selected Scissors");

    } else if (computerSelection ==='Rock' && playerSelection ==='Scissors') { 
        alert ("You lose Rock beats Scissors");
    } else if (computerSelection ==='Rock' && playerSelection ==='Paper') { 
        alert ("You win Paper beats Rock");

    } else if (computerSelection ==='Paper' && playerSelection ==='Rock') { 
        alert ("You lose Paper beats Rock");
    } else if (computerSelection ==='Paper' && playerSelection ==='Scissors') { 
        alert ("You win Scissors beats Paper");

    } else if (computerSelection ==='Scissors' && playerSelection ==='Rock') { 
        alert ("You win Rock beats Scissors");
    } else { 
        alert ("You lose Scissors beats Paper");
    };
}

alert(singleRound(computerSelection,playerSelection));

// create game() function that keeps score and reports a winner/loser

function game() {

}

