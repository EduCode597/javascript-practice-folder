const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

// Get elements from the page
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');

// Optional: log the random number for debugging (remove in production)
// console.log('Secret number:', randomNum);

function endGame(message, success) {
    feedback.textContent = message;
    feedback.className = success ? 'text-success' : 'text-danger';
    guessInput.disabled = true;
    submitBtn.disabled = true;

    // Add a Play Again button
    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    restart.className = 'btn btn-secondary mt-2 text-center';
    restart.addEventListener('click', () => location.reload());
    feedback.appendChild(document.createElement('br'));
    feedback.appendChild(restart);
}

submitBtn.addEventListener('click', () => {
    const value = guessInput.value.trim();
    const num = parseInt(value, 10);

    // Validate input
    if (value === '' || Number.isNaN(num)) {
        feedback.textContent = `Please enter a valid number between ${minNum} and ${maxNum}.`;
        feedback.className = 'text-warning';
        return;
    }

    if (num < minNum || num > maxNum) {
        feedback.textContent = `Your guess must be between ${minNum} and ${maxNum}.`;
        feedback.className = 'text-warning';
        return;
    }

    attempts++;

    if (num === randomNum) {
        endGame(`Correct! You guessed the number ${randomNum} in ${attempts} attempts. ✅`, true);
    } else if (num < randomNum) {
        feedback.textContent = `Too low! Try a higher number. Attempts: ${attempts}`;
        feedback.className = 'text-info';
    } else {
        feedback.textContent = `Too high! Try a lower number. Attempts: ${attempts}`;
        feedback.className = 'text-info';
    }
});

// Allow pressing Enter to submit
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn.click();
});