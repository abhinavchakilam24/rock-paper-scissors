function getComputerChoice(){
    let choices=['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(computer, player){
    if(player == null || player == NaN){
        console.log('Please enter a vaid response.');
    }
    else if(computer == player){
        console.log('It is a draw!');
        return 0.5;
    }
    else{
        if(computer == 'Rock'){
            if(player == 'Paper'){
                console.log('You Win! Paper beats Rock');
                return 1;
            }
            else if(player == 'Scissors'){
                console.log('You lose! Rock beats Scissors')
                return 0;
            }
        }
        else if(computer == 'Paper'){
            if(player == 'Rock'){
                console.log('You Lose! Paper beats Rock');
                return 0;
            }
            else if(player == 'Scissors'){
                console.log('You Win! Scissors beats Paper');
                return 1;
            }
        }
        else if(computer == 'Scissors'){
            if(player == 'Rock'){
                console.log('You Win! Rock beats Scissors');
                return 1;
            }
            else if(player == 'Paper'){
                console.log('You Lose! Scissors beats Paper');
                return 0;
            }
        }
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = "Rock";
        let score = playRound(computerSelection,playerSelection);
        if(score == 0.5){
            draws += 1;
            score =0;
        }
        playerScore += score;
    }
    computerScore =  5 - (playerScore + draws);
    if(playerScore == computerScore){
        console.log('Its a draw!');
    }
    else if(playerScore > computerScore){
        console.log('Player has won the game!');
    }
    else{
        console.log('Computer has won the game!');
    }
    console.log('Player score is :' + playerScore);
    console.log('Computer score is :' + computerScore);
}

playGame();