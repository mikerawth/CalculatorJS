// this is the sequence of inputs from the calculator
let sequence = "";

// this function is called upon either a calculator button being clicked
// or a key press on the keyboard (see the document.onkeydown functionality below)
// and adds the input into the sequence variable
function buttonPress(btn) {
    sequence += btn;
    document.getElementById("display").value = sequence;
}

// this function runs the calcuation upon the user hitting = (or Enter)
function calculate() {
    try {
        // math.evaluate is a part of math.js library
        const result = math.evaluate(sequence);
        // get the result from above and change the display to it
        document.getElementById("display").value = result;
        // this allows the result to be used in further calculations
        sequence = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// this function clears the display
function clearDisplay() {
    sequence = "";
    document.getElementById("display").value = "";
}

// this allows input from the keyboard to be used
document.onkeydown = function (e) {
    // capture the key being pressed on keyboard
    let keyPress = e.key;
    // For keyPress 0-9,+,-,*,\,.
    if (/^[0-9+\-*\/().]+$/.test(keyPress)) {
        buttonPress(keyPress);
    }
    // For keyPress = or Enter key
    else if (keyPress === "=" || keyPress === "Enter") {
        calculate();
    }
    // For keyPress c,C
    else if (keyPress.toLowerCase() === "c") {
        clearDisplay();
    }
};
