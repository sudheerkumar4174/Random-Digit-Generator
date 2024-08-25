function generateRandomDigit() {
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);

    if (isNaN(min) || isNaN(max)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    if (min > max) {
        document.getElementById('result').textContent = 'Min cannot be greater than Max.';
        return;
    }

    const randomDigit = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `Random Digit: ${randomDigit}`;
}
