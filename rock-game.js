// console.log('hi');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()

  if (userInput === 'rock'){
    console.log('rock')
  }
  else if (userInput === 'paper') {
    console.log('paper')
  }
  else if (userInput === 'scissors'){
     console.log('scissors')
  }
  else console.log('error')
}

getUserChoice('rock');
getUserChoice('paper');
getUserChoice('scissors');
getUserChoice('water');


function getComputerChoice ( )  {
  const randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0){
  return 'rock';
  } 
  else if (randomNumber === 1){
    return 'paper';
  }
  else { return 'scissors';
  }
}
// console.log(getComputerChoice());

function determineWinner (userChoice , computerChoice) {
  if (userChoice === computerChoice){
    return "It is  a tie"
  }

   if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

console.log(determineWinner('rock', 'paper')); // Should print 'The computer won!'
console.log(determineWinner('rock', 'scissors')); // Should print 'You won!'
console.log(determineWinner('paper', 'scissors')); // Should print 'The computer won!'
console.log(determineWinner('paper', 'rock')); // Should print 'You won!'
console.log(determineWinner('scissors', 'rock')); // Should print 'The computer won!'
console.log(determineWinner('scissors', 'paper')); // Should print 'You won!'

const playGame = () => {
  const userChoice = getUserChoice('rock'); // You can replace 'rock' with 'paper' or 'scissors'
  const computerChoice = getComputerChoice();

  console.log('User choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();


