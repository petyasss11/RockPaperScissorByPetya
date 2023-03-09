function rockPaperScissors(playerTurn) {
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
// let playerTurn = 0

if (playerTurn == 'r' || playerTurn == 'rock') {
    playerTurn = rock
} else if (playerTurn == 'p' || playerTurn == 'paper') {
    playerTurn = paper
} else if (playerTurn == 's' || playerTurn == 'scissors') {
    playerTurn = scissors
} else {
    console.log('Invalid input.Try again...')
}

let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
let computerMove = 0;

switch (computerRandomNumber) {
    case 1:
        computerMove = rock;
        break;
    case 2:
        computerMove = paper;
        break;
    case 3:
        computerMove = scissors;
        break;
}

console.log(`The computer chooses ${computerMove}`);

if ((playerTurn === rock && computerMove === scissors) || (playerTurn === paper && computerMove === rock) || (playerTurn === scissors && computerMove === paper)) {
    console.log('Congrats! You win!')
} else if ((computerMove === rock && playerTurn === scissors) || (computerMove === paper && playerTurn === rock) || (computerMove === scissors && playerTurn === paper)) {
    console.log('Sorry, you are a LOSER! Try one more time!');
} else {
    console.log('This game was a draw!');
}
}
rockPaperScissors('rock')