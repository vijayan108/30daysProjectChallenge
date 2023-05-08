var secretNumber = Math.trunc(Math.random() * 100) + 1;

let guessInput = document.getElementById("guessField");

let message = document.getElementById("message");


function checkGuess() {
    let userGuess = Number(guessInput.value);
    if (userGuess === secretNumber) {
        message.textContent = "Congratulations! You guessed the secret number!";
    } else if (userGuess > secretNumber) {
        message.textContent = "Too high! Try again!";
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low! Try again!";
    }
}

function resetGame() {
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    message.textContent = "Start guessing...";
    guessInput.value = "";
    console.log(secretNumber);
    
}

console.log(secretNumber);