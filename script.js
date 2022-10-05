// cache the DOM (may not end up needing this)
const playerScore = 0;
const computerScore = 0;
const playScore_div = document.getElementsByClassName("playerScore");
const computerScore_div = document.getElementsByClassName("computerScore");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

// determine the computer choice (randomly decided)

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

//add event listener for each button and run a single game each time a button is pressed

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonChoice = button.getAttribute('id')
        let player = buttonChoice
        singleRound(player);
    });
});

function singleRound(player) {
    let computer = getComputerChoice();
    if (player === computer) {
        console.log("Tie Game");
        return ("Tie Game");

    } else if (computer ==='Rock' && player ==='Scissors') { 
        console.log ("You lose Rock beats Scissors");
        return ("Computer Wins");
    } else if (computer ==='Rock' && player ==='Paper') { 
        console.log ("You win Paper beats Rock");
        return ("Player Wins");

    } else if (computer ==='Paper' && player ==='Rock') { 
        console.log ("You lose Paper beats Rock");
        return ("Computer Wins");
    } else if (computer ==='Paper' && player ==='Scissors') { 
        console.log ("You win Scissors beats Paper");
        return ("Player Wins");

    } else if (computer ==='Scissors' && player ==='Rock') { 
        console.log ("You win Rock beats Scissors");
        return ("Player Wins");
    } else { 
        console.log ("You lose Scissors beats Paper");
        return ("Computer Wins");
    };

}

// create game() function that keeps score and reports a winner/loser
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = singleRound();
        if (outcome === "Tie Game") {
            console.log ("No Change in score.");
        } else if (outcome === "Player Wins") { 
            console.log ("Player score is: " + (playerScore + 1));
            playerScore++;
        } else { 
            console.log ("Computer score is: " + (computerScore + 1));
            computerScore++;
        }; 
    }
    if (computerScore > playerScore) {
        console.log ("Computer won the game!");
    } else if (computerScore === playerScore){
        console.log ("Tie Game");
    } else {
        console.log ("Player won the game!");
    }
}

/*
            if (player === computer) {
                console.log("Tie Game");
                return ("Tie Game");
        
            } else if (computer ==='Rock' && player ==='Scissors') { 
                console.log ("You lose Rock beats Scissors");
                computerScore++;
                return ("Computer Wins");

            } else if (computer ==='Rock' && player ==='Paper') { 
                console.log ("You win Paper beats Rock");
                playerScore++;
                return ("Player Wins");
        
            } else if (computer ==='Paper' && player ==='Rock') { 
                console.log ("You lose Paper beats Rock");
                computerScore++;
                return ("Computer Wins");

            } else if (computer ==='Paper' && player ==='Scissors') { 
                console.log ("You win Scissors beats Paper");
                playerScore++;
                return ("Player Wins");
        
            } else if (computer ==='Scissors' && player ==='Rock') { 
                console.log ("You win Rock beats Scissors");
                playerScore++;
                return ("Player Wins");

            } else { 
                console.log ("You lose Scissors beats Paper");
                computerScore++;
                return ("Computer Wins");
            };
*/

/*
// create game() function that keeps score and reports a winner/loser

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = singleRound();
        if (outcome === "Tie Game") {
            console.log ("No Change in score.");
        } else if (outcome === "Player Wins") { 
            console.log ("Player score is: " + (playerScore + 1));
            playerScore++;
        } else { 
            console.log ("Computer score is: " + (computerScore + 1));
            computerScore++;
        }; 
    }
    if (computerScore > playerScore) {
        console.log ("Computer won the game!");
    } else if (computerScore === playerScore){
        console.log ("Tie Game");
    } else {
        console.log ("Player won the game!");
    }
}

game()

*/