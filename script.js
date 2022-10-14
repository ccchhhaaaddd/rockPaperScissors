let playerScore = 0;
let computerScore = 0;
let choices = ["Rock", "Paper", "Scissors"];

window.onload = function() {
    let buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let buttonChoice = button.getAttribute('id')
            let player = buttonChoice
            singleRound(player);
        });
    });

};

function singleRound(player) {
    let you = player;
    let opponent = choices[Math.floor(Math.random() * choices.length)];

    if (you === "Rock") {
        if (opponent === "Scissors") {
            playerScore += 1;
            console.log("Rock beats scissors, congratulations human!");
        }
        else if (opponent === "Paper") {
            computerScore += 1;
            console.log("Paper beats rock, better luck next time human!");
        }
    }
    else if (you === "Scissors") {
        if (opponent === "Paper") {
            playerScore += 1;
            console.log("Scissors beats paper, congratulations human!");
        }
        else if (opponent === "Rock") {
            computerScore += 1;
            console.log("Rock beats scissors, better luck next time human!");
        }
    }
    else if (you === "Paper") {
        if (opponent === "Rock") {
            playerScore += 1;
            console.log("Paper beats rock, congratulations human!");
        }
        else if (opponent === "Scissors") {
            computerScore += 1;
            console.log("Scissors beats paper, better luck next time human!");
        }
    }

    document.getElementById("humanScore").innerText = playerScore;
    document.getElementById("robotScore").innerText = computerScore;
};