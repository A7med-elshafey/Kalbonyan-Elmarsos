'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;
document.querySelector('.guess').value = 23;
*/
// make secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 5;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// my adding
const gameOver = document.querySelector('.over');
// gameOver.classList.remove('game-over');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // check if not number included
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number ';
    displayMessage('⛔️ No number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 too high!' : '📉 too low';
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low');
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
      gameOver.classList.remove('over');
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Game Over';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉 too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game Over';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  // gameOver.classList.remove('game-over');
  gameOver.classList.add('over');
});
