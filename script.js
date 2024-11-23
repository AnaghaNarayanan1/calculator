
// })// Select the display element
const display = document.getElementById('display');

// Append a number to the display
function appendNumber(number) {
    display.value += number;
}

// Append an operator to the display
function appendOperator(operator) {
    // Prevent multiple consecutive operators
    if (['+', '-', '*', '/', '%'].includes(display.value.slice(-1))) return;
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the square of the current number
function calculateSquare() {
    if (display.value) {
        const result = Math.pow(parseFloat(display.value), 2);
        display.value = result;
    } else {
        alert('Enter a number first!');
    }
}

// Calculate the result of the expression
function calculateResult() {
    try {
        if (display.value) {
            // Evaluate the expression using JavaScript's eval()
            const result = eval(display.value);
            display.value = result;
        } else {
            alert('Please enter a valid calculation.');
        }
    } catch (error) {
        alert('Invalid calculation!');
    }
}
