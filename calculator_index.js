// CALCULATOR FUNCTIONALITY

// calculator_index.js

// Select the display element
const display = document.querySelector('.display span');

// Function to clear the display
function clearDisplay() {
    display.textContent = '0';
}

// Function to append characters to the display
function appendToDisplay(character) {
    // Check if the display is already showing 0, if so, replace it with the character
    if (display.textContent === '0') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

// Function to calculate the result
function calculate() {
    let result;
    try {
        // Uses eval to evaluate the expression entered in the display
        result = eval(display.textContent);
        // Displays the result
        display.textContent = result;
    } catch (error) {
        // If an error occurs during evaluation, display an error message
        display.textContent = 'Error';
    }
}
