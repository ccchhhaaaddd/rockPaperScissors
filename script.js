// establish game choice list and randomizer

const choices = ["Rock", "Paper", "Scissors"];

const randomChoice = choices[Math.floor(Math.random() * choices.length)];

// determine the computer choice (randomly decided)

function getComputerChoice() {
    return randomChoice
}

let computerSelection = getComputerChoice();

// prompt player for their choice and then standardize the string input

let playerSelection = window.prompt('Please type Rock, Paper, or Scissors');

let fixedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

/* take computer choice, player choice, and play one round 
of the game - returning a string that declares the winner 
(example: "You lose Paper beats Rock") */

function singleRound(computerSelection, fixedPlayerSelection) {
    if (computerSelection ==='Rock' && fixedPlayerSelection ==='Rock') {
        return ("Tie, both selected Rock");
    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Paper') { 
        return ("Tie, both selected Paper");
    } else if (computerSelection ==='Scissors' && fixedPlayerSelection ==='Scissors') { 
        return ("Tie, both selected Scissors");

    } else if (computerSelection ==='Rock' && fixedPlayerSelection ==='Scissors') { 
        return ("You lose Rock beats Scissors");
    } else if (computerSelection ==='Rock' && fixedPlayerSelection ==='Paper') { 
        return ("You win Paper beats Rock");

    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Rock') { 
        return ("You lose Paper beats Rock");
    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Scissors') { 
        return ("You win Scissors beats Paper");

    } else if (computerSelection ==='Scissors' && fixedPlayerSelection ==='Rock') { 
        return ("You win Rock beats Scissors");
    } else { 
        return ("You lose Scissors beats Paper");
    };

}

alert(singleRound(computerSelection,fixedPlayerSelection));

// create game() function that keeps score and reports a winner/loser


function game() {
    for (let i = 0; i < 5; i++) {
        singleRound();
    }
    let playerScore = 0;
    let computerScore = 0;
    if (computerSelection ==='Rock' && fixedPlayerSelection ==='Rock') {
        alert ("No Change in score.");
    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Paper') { 
        alert ("No Change in score.");
    } else if (computerSelection ==='Scissors' && fixedPlayerSelection ==='Scissors') { 
        alert ("No Change in score.");

    } else if (computerSelection ==='Rock' && fixedPlayerSelection ==='Scissors') { 
        alert ("Computer score is: " + (computerScore += 1));
    } else if (computerSelection ==='Rock' && fixedPlayerSelection ==='Paper') { 
        alert ("Player score is : " + (playerScore += 1));

    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Rock') { 
        alert ("Computer score is: " + (computerScore += 1));
    } else if (computerSelection ==='Paper' && fixedPlayerSelection ==='Scissors') { 
        alert ("Player score is : " + (playerScore += 1));

    } else if (computerSelection ==='Scissors' && fixedPlayerSelection ==='Rock') { 
        alert ("Player score is : " + (playerScore += 1));
    } else { 
        alert ("Computer score is: " + (computerScore += 1));
    };

}

game()

