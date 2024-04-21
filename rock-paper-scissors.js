let scores = [0,0];
let counter = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    var playerSelection = "Rock";
    playRound(playerSelection, scores);
});
paperButton.addEventListener("click", function() {
    var playerSelection = "Paper";
    playRound(playerSelection, scores);
});
scissorsButton.addEventListener("click", function() {
    var playerSelection = "Scissors";
    playRound(playerSelection, scores);
});

function playRound(playerSelection, scores){
    if(counter < 5){
        var computerSelection = getComputerChoice();
        const computerChoice = document.querySelector(".computer-choice");
        computerChoice.textContent = "Your Opponent's choice is " + computerSelection;
        const playerChoice = document.querySelector(".player-choice");
        playerChoice.textContent = "Your choice is " + playerSelection; 
        scores = conductRound(computerSelection,playerSelection, scores);

        const player_score = document.querySelector(".player-score"); 
        const computer_score = document.querySelector(".computer-score");
        player_score.textContent = scores[0];
        computer_score.textContent = scores[1];

        counter += 1;
        if(counter == 5){
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            declareWinners(scores);
        }
    }
}

function declareWinners(scores) {
    const finalWinner = document.querySelector(".final-winner");
    if(scores[0] == scores[1]){
        finalWinner.textContent = "It's a draw!";
    }
    else if(scores[0] > scores[1]){
        finalWinner.textContent = "Player has won the game!";
    }
    else{
        finalWinner.textContent = "Computer has won the game!";
    }
}

function conductRound(computer, player, scores){
    const winner = document.getElementById('winner');
    if(computer == player){
        winner.textContent = 'It is a draw! No one gets a point';
    }
    else{
        if(computer == 'Rock'){
            if(player == 'Paper'){
                winner.textContent = 'You Win! Paper beats Rock';
                scores[0] += 1;
            }
            else if(player == 'Scissors'){
                winner.textContent = 'You lose! Rock beats Scissors';
                scores[1] += 1;
            }
        }
        else if(computer == 'Paper'){
            if(player == 'Rock'){
                winner.textContent = 'You Lose! Paper beats Rock';
                scores[1] += 1;
            }
            else if(player == 'Scissors'){
                winner.textContent = 'You Win! Scissors beats Paper';
                scores[0] += 1;
            }
        }
        else if(computer == 'Scissors'){
            if(player == 'Rock'){
                winner.textContent = 'You Win! Rock beats Scissors';
                scores[0] += 1;
            }
            else if(player == 'Paper'){
                winner.textContent = 'You Lose! Scissors beats Paper';
                scores[1] += 1;
            }
        }
    }
    return scores;
}

function getComputerChoice(){
    let choices=['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}