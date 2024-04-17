let playerScore = 0;
let computerScore = 0;
let counter = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    var playerSelection = "Rock";
    playRound(playerSelection, playerScore, computerScore);
});
paperButton.addEventListener("click", function() {
    var playerSelection = "Paper";
    playRound(playerSelection, playerScore, computerScore);
});
scissorsButton.addEventListener("click", function() {
    var playerSelection = "Scissors";
    playRound(playerSelection, playerScore, computerScore);
});

function playRound(playerSelection, playerScore, computerScore){
    if(counter < 5){
        var computerSelection = getComputerChoice();
        const computerChoice = document.querySelector(".computer-choice");
        computerChoice.textContent = "Your Opponent's choice is " + computerSelection;
        const playerChoice = document.querySelector(".player-choice");
        playerChoice.textContent = "Your choice is " + playerSelection; 
        conductRound(computerSelection,playerSelection, computerScore, playerScore);

        const player_score = document.querySelector(".player-score"); 
        const computer_score = document.querySelector(".computer-score");
        console.log(playerScore);
        console.log(computerScore);
        player_score.textContent = playerScore;
        computer_score.textContent = computerScore;

        counter += 1;
        if(counter == 5){
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            declareWinners(playerScore, computerScore);
        }
    }
}

function declareWinners(playerScore, computerScore) {
    const finalWinner = document.querySelector(".final-winner");
    if(playerScore == computerScore){
        finalWinner.textContent = "It's a draw!";
    }
    else if(playerScore > computerScore){
        finalWinner.textContent = "Player has won the game!";
    }
    else{
        finalWinner.textContent = "Computer has won the game!";
    }
}

function conductRound(computer, player, computerScore, playerScore){
    const winner = document.getElementById('winner');
    if(computer == player){
        winner.textContent = 'It is a draw! No one gets a point';
    }
    else{
        if(computer == 'Rock'){
            if(player == 'Paper'){
                winner.textContent = 'You Win! Paper beats Rock';
                playerScore += 1;
            }
            else if(player == 'Scissors'){
                winner.textContent = 'You lose! Rock beats Scissors';
                computerScore += 1;
            }
        }
        else if(computer == 'Paper'){
            if(player == 'Rock'){
                winner.textContent = 'You Lose! Paper beats Rock';
                computerScore += 1;
            }
            else if(player == 'Scissors'){
                winner.textContent = 'You Win! Scissors beats Paper';
                playerScore += 1;
            }
        }
        else if(computer == 'Scissors'){
            if(player == 'Rock'){
                winner.textContent = 'You Win! Rock beats Scissors';
                playerScore += 1;
            }
            else if(player == 'Paper'){
                winner.textContent = 'You Lose! Scissors beats Paper';
                computerScore += 1;
            }
        }
    }
}

function getComputerChoice(){
    let choices=['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}