// Handle keyboard input
document.onkeydown = function (e) {
    let keyPress = e.key;
    // if keyPress is 0-9,+,-,*,/,(, or )
    if (/^[0-9+\-*\/().]+$/.test(keyPress)) {
        buttonPress(keyPress);
        // if keyPress is = or Enter key
    } else if (keyPress === "=" || keyPress === "Enter") {
        calculate();
        // if keyPress is c,C, or Backspace key
    } else if (keyPress.toLowerCase() === "c" || keyPress === "Backspace") {
        clearDisplay();
    }
};

// Calculator logic
let sequence = "";
let clearTextOnNumberPress = false;

// runs on a button on the calculator being clicked or
// the keyboard being pressed
function buttonPress(btn) {
    // checks to see if sequence should be cleared
    if (clearTextOnNumberPress === true) {
        let numBtn = parseInt(btn);
        if (numBtn >= 0 && numBtn <= 9) {
            clearDisplay();
        }
        clearTextOnNumberPress = false;
    }
    // adds button press to the sequence
    sequence += btn;
    updateDisplay();
}

function calculate() {
    try {
        // math.evaluate comes from math.js library
        const result = math.evaluate(sequence);
        sequence = result.toString();
        updateDisplay();
        clearTextOnNumberPress = true;
    } catch (error) {
        displayError();
    }
}

function clearDisplay() {
    sequence = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = sequence;
}

function displayError() {
    document.getElementById("display").value = "Error";
}
