//I want to play Rock, Paper, Scissors against an automated opponent.

//I want to be able to choose one of the three options: Rock, Paper, or Scissors.

//I want to be able to see the computer's choice.

let userWins = 0;
let computerWins = 0;
let ties = 0;

let options = ['R', 'P', 'S'];

let playGame = function () {
  let userChoice = window.prompt('Enter R, P, S: ');

  if (!userChoice) {
    alert('Game Over');
    return;
  }

  userChoice = userChoice.toUpperCase();
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  alert('Computer chose: ' + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    alert('Tie!');
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    userWins++;
    alert('You won!');
  } else {
    computerWins++;
    alert('You lost!');
  }

  alert('Wins: ' + userWins + '\nLosses: ' + computerWins + '\nTies: ' + ties);

  let playAgain = window.confirm('Play again?');
  if (playAgain) {
    playGame();
  }
};

playGame();
