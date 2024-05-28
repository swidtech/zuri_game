document.addEventListener("DOMContentLoaded", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 3;

    const guessInput = document.getElementById('guessInput');
    const submitGuessButton = document.getElementById('submitGuess');
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    const playAgainButton = document.getElementById('playAgain');

    submitGuessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            messageElement.textContent = 'Please enter a valid number between 1 and 100';
            return;
        }

        attempts--;
        attemptsElement.textContent = attempts;

        if (userGuess === randomNumber) {
            messageElement.textContent = 'Congratulations! You guessed the right number.';
            endGame();
        } else if (userGuess < randomNumber) {
            messageElement.textContent = 'Too low!';
        } else {
            messageElement.textContent = 'Too high!';
        }

        if (attempts === 0 && userGuess !== randomNumber) {
            messageElement.textContent = `Game over! The correct number was ${randomNumber}`;
            endGame();
        }
    });

    playAgainButton.addEventListener('click', () => {
        window.location.reload();
    });

    function endGame() {
        guessInput.disabled = true;
        submitGuessButton.disabled = true;
        playAgainButton.style.display = 'inline-block';
    }
});


















