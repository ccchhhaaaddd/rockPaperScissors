// determine the computer choice (randomly decided)

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

/* take computer choice,  get player choice, and play one round 
of the game - returning a string that declares the winner 
(example: "You lose Paper beats Rock") */

function singleRound() {
    const button = document.querySelector('button');
    let computer = getComputerChoice();
    let player = button.addEventListener('click', e => { 
        let choice = e.target.className;
        return choice;
    });

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

game();