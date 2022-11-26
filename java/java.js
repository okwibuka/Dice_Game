`use strict`;
const player0=document.querySelector('.player--0'); //for performing toggle
const player1 = document.querySelector('.player--1'); //for performong toggle

let name0 = document.querySelector('#name--0');
let name1 = document.querySelector('#name--1');

let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');

const diceElement=document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');


let scores,currentScore,activePlayer;

const initialisation = function(){

score0.textContent=0;
score1.textContent=0;
current0Element.textContent=0;
current1Element.textContent=0;
diceElement.classList.add('hidden');
player0.classList.remove('player--winner');
player1.classList.remove('player--winner'); 
player0.classList.remove('player--active');
player1.classList.add('player--active');
name0.textContent = 'player 1';
name1.textContent = 'player 2';

scores = [0 , 0]
currentScore = 0;
activePlayer = 0;
playing = true;
}

initialisation()

const switchPlayer = function(){

 document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]; //not necessary

   document.getElementById(`current--${activePlayer}`).textContent=0;
   currentScore = 0;
   activePlayer = activePlayer === 0 ? 1: 0; 

   player0.classList.toggle('player--active'); //toggle shift one class contents to another class
   player1.classList.toggle('player--active');

}

 diceElement.classList.add('hidden');  // hidding image of dice

btnRoll.addEventListener('click', function(){

  if(playing){

  const random= Math.trunc(Math.random()*6) + 1 ;
  diceElement.textContent = random;
   diceElement.classList.remove('hidden'); // removing image of dice from hidden

  // diceElement.src = `dice-${dice}.png`

  if(random !== 1)
  {
  currentScore += random; //currentScore = currentScore + random
  // current0Element.textContent= currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;


  }
  else
  {

       switchPlayer();
  
}
  }
});
btnHold.addEventListener('click', function(){

  if(playing){

  scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore
  
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

  
   if(scores[activePlayer] >= 100)
   {

      playing = false;
      
      diceElement.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector(`#name--${activePlayer}`).textContent = 'you win🏆'

   }else{
  
  switchPlayer();
   }}

})

btnNew.addEventListener('click', initialisation
);

