// Game values
let min = 1,
    max = 5
    winningNum = 2,
    guessesLeft = 3;

// Elements
const game = document.querySelector('#game'),
    message = document.querySelector('.message');
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.querySelector('#guess-input'),
    guessBtn = document.querySelector('#guess-submit');

// Assing min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(e){
    e.preventDefault();
    let guess = parseInt(guessInput.value);

    // validation
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please, enter a numer between ${min} and ${max}`, 'red');
    } else {
        // check if won
        if(guess === winningNum){
            // disable input
            guessInput.disabled = true;
            // show message
            setMessage(`You win! ${winningNum} is correct!`, 'green');
            showStartBtn();
        } else {
            // if wrong number
            guessesLeft--;
            // show message
            if(guessesLeft <= 0){
                // disable input
                guessInput.disabled = true;
                // game lost
                setMessage(`Game over! ${winningNum} was correct.`, 'red');
                showStartBtn();
            } else {
                // answer wrong
                setMessage(`${guess} is not correct! ${guessesLeft} left!`, 'orange');
            }
        }
    }

});

// Set message
function setMessage(msg, clr = 'black'){
    message.textContent = msg;
    message.style.color = clr;
    guessInput.style.borderColor = clr;
}

// Show start button
function showStartBtn(){
    guessBtn.value = 'Start New Game';
    guessBtn.className += 'play-again';
}
 
    