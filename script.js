const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')


const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceEl.classList.add('hidden')
score0El.textContent = 0;
score1El.textContent = 0;


btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
       
        
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        scores[activePlayer] += currentScore;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
        
        
    }
});

btnHold.addEventListener('click', function(){
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        btnRoll.setAttribute('disabled', '');
        btnHold.setAttribute('disabled', '');
        
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})
btnNew.addEventListener('click', function(){
    location.reload()
})

