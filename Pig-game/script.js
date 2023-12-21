'use strict';
// Selecting Elements
const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEle = document.querySelector('.dice');
 
// Selecting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

let currentScore = 0;
// Rolling Functianlity
btnRoll.addEventListener('click', function () {
  // 1. Genearting a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   2. Display dice
  diceEle.src = `dice-${dice}.png`;
  diceEle.classList.remove('hidden')
  //  3. Check for rolled 1: if true switch to next player

  if(dice!== 1){
    currentScore += dice;

  }

 
});
