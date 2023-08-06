//I want to play Rock, Paper, Scissors against an automated opponent.

//I want to be able to choose one of the three options: Rock, Paper, or Scissors.

//I want to be able to see the computer's choice.

let userWins = 0;
let computerWins = 0;
let ties = 0;

//options is an array that holds the possible choices: Rock ('R'), Paper ('P'), and Scissors ('S').
let options = ['R', 'P', 'S'];

//playGame is a function that plays a single round of Rock, Paper, Scissors with the user and the computer.
let playGame = function () {
  //It starts by asking the user for their choice through a prompt.
  let userChoice = window.prompt('Enter R, P, S: ');

  //If the user cancels the prompt, it shows an alert for "Game Over" and returns, effectively ending the game.
  if (!userChoice) {
    alert('Game Over');
    return;
  }
  //The user's choice is converted to uppercase for consistent comparison.
  userChoice = userChoice.toUpperCase();

  //A random index is generated to select the computer's choice from the options array.
  let index = Math.floor(Math.random() * options.length);

  // If a user choice is not R,P,S it's going to show invalid choice!
  if (userChoice !== 'R' && userChoice !== 'P' && userChoice !== 'S') {
    alert('Invalid choice!');
    return;
  }

  //The computer's choice is displayed to the user.
  //Options[index] retrieves a random choice ('Rock', 'Paper', or 'Scissors') from the options array and assigns it to the computerChoice variable.
  let computerChoice = options[index];
  //The resulting message will be something like "Computer chose: Rock" or "Computer chose: Paper", depending on the randomly selected computerChoice.
  alert('Computer chose: ' + computerChoice);

  //The user's choice is compared with the computer's choice to determine the outcome (tie, win, or loss).
  if (userChoice === computerChoice) {
    ties++;
    alert('Tie!');
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    //The game keeps track of wins, losses, and ties using variables (ties, userWins, and computerWins are assumed to be defined elsewhere in your code).
    userWins++;
    alert('You won!');
  } else {
    computerWins++;
    alert('You lost!');
  }
  //The results are displayed in an alert.
  //The \n is an escape sequence representing a newline character. It is used to create a new line within a string.
  alert('Wins: ' + userWins + '\nLosses: ' + computerWins + '\nTies: ' + ties);
  //The user is asked if they want to play again. If they confirm, the playGame function is called again (recursion).
  let playAgain = window.confirm('Play again?');
  if (playAgain) {
    playGame();
  }
};
//The last line playGame(); outside the function is used to start the game when the script runs.
playGame();
