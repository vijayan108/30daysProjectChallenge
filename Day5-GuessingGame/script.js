var secretNumber = Math.trunc(Math.random() * 100) + 1;

let guessInput = document.getElementById("guessField");

let message = document.getElementById("message");


function checkGuess() {
    let userGuess = Number(guessInput.value);
    if (userGuess === secretNumber) {
        message.textContent = "Congratulations! You guessed the secret number!";
        message.style.color = "green";
    } else if (userGuess > secretNumber) {
        message.textContent = "Too high! Try again!";
        message.style.color = "red";
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low! Try again!";
        message.style.color = "yellow";
    }
}

function resetGame() {
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    message.style.color = "black";
    message.textContent = "Start guessing...";
    guessInput.value = "";
    console.log(secretNumber);
    
}

console.log(secretNumber);