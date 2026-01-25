function calculate1() {
    const percent = parseFloat(document.getElementById('percent1').value);
    const number = parseFloat(document.getElementById('number1').value);
    const resultElement = document.getElementById('result1');

    if (isNaN(percent) || isNaN(number)) {
        resultElement.textContent = "Result: Please enter valid numbers.";
        return;
    }

    // Formula: (X / 100) * Y
    const result = (percent / 100) * number;
    resultElement.textContent = `Result: ${result.toFixed(2)}`;
}

function calculate2() {
    const numberX = parseFloat(document.getElementById('number2a').value);
    const numberY = parseFloat(document.getElementById('number2b').value);
    const resultElement = document.getElementById('result2');

    if (isNaN(numberX) || isNaN(numberY) || numberY === 0) {
        resultElement.textContent = "Result: Please enter valid numbers (Y cannot be zero).";
        return;
    }

    // Formula: (X / Y) * 100
    const result = (numberX / numberY) * 100;
    resultElement.textContent = `Result: ${result.toFixed(2)}%`;
}

function calculate3() {
    const startValue = parseFloat(document.getElementById('number3a').value);
    const endValue = parseFloat(document.getElementById('number3b').value);
    const resultElement = document.getElementById('result3');

    if (isNaN(startValue) || isNaN(endValue) || startValue === 0) {
        resultElement.textContent = "Result: Please enter valid numbers (Start Value cannot be zero).";
        return;
    }

    // Formula: ((End - Start) / Start) * 100
    const change = endValue - startValue;
    const percentageChange = (change / startValue) * 100;

    let description = "Change";
    if (change > 0) {
        description = "Increase";
    } else if (change < 0) {
        description = "Decrease";
    }

    resultElement.textContent = `Result: ${Math.abs(percentageChange).toFixed(2)}% ${description}`;
}

function calculate4() {
    const number = parseFloat(document.getElementById('number4').value);
    const operation = document.getElementById('operation4').value;
    const percent = parseFloat(document.getElementById('percent4').value);
    const resultElement = document.getElementById('result4');

    if (isNaN(number) || isNaN(percent)) {
        resultElement.textContent = "Result: Please enter valid numbers.";
        return;
    }

    let result;
    // Formula: Number * (1 ± (Percent / 100))
    if (operation === 'add') {
        result = number * (1 + (percent / 100));
    } else { // subtract
        result = number * (1 - (percent / 100));
    }

    resultElement.textContent = `Result: ${result.toFixed(2)}`;
}

// Run initial calculations on load for demonstration
window.onload = () => {
    calculate1();
    calculate2();
    calculate3();
    calculate4();
};
