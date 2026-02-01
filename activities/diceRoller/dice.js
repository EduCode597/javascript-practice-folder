function rollDice() {
    const inputDiceNum = document.getElementById("inputDiceNum").value;
    const diceResults = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < inputDiceNum; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice-${value}.svg" style="width:50px; height:50px; margin:5px;">`);
    }
    diceResults.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(' ');
}