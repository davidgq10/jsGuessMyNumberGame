'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!!!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;

// Define a random number to guess
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  if (score) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
      //When there is not input
      displayMessage('⛔ No valid number');
    }
    //When player wins
    else if (guess === secretNumber) {
      //When player get a better score
      displayMessage('🎉 Correct Number!!!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      playerGetBetterScore();
    }
    //When the player puts wrong number
    else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '👆 Too high!' : '👇 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
      if (!score) {
        displayMessage('😥 You lose!!!');
        document.querySelector('body').style.backgroundColor = 'crimson';
      }
    }
  }
  //Whe player spend all their chances
  else {
    displayMessage('😥You lose!!!, 🎮 restart clicking on Again button!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  console.log(`again`);
  resetScore();
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function playerGetBetterScore() {
  if (highscore < score) {
    highscore = score;
    document.querySelector('.highscore').textContent = '✨' + highscore;
  }
}

function resetScore() {
  score = 20;
}
