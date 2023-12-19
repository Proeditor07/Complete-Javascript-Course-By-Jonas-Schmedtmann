'use strict';
let score = 20;

let secreateNumber = Math.trunc(Math.random() * 20 + 1);

let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when input is empty
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number';
    // When guessed right
  } else if (guess === secreateNumber) {
    document.querySelector('.message').textContent = 'Guessed right 🎉';

    document.querySelector('.number').textContent = secreateNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When too high
  } else if (guess > secreateNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High 💹';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game 😞';
    }
    // When too low
  } else if (guess < secreateNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too small 🤏';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost game 😞';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreateNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
