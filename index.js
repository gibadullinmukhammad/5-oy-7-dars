let displayValue = "";

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

document.getElementById("clear").addEventListener("click", () => {
    displayValue = "";
    updateDisplay();
});

document.getElementById("divide").addEventListener("click", () => {
    if (displayValue !== "") {
        displayValue += "/";
        updateDisplay();
    }
});

document.getElementById("multiply").addEventListener("click", () => {
    if (displayValue !== "") {
        displayValue += "*";
        updateDisplay();
    }
});

document.getElementById("subtract").addEventListener("click", () => {
    if (displayValue !== "") {
        displayValue += "-";
        updateDisplay();
    }
});

document.getElementById("add").addEventListener("click", () => {
    if (displayValue !== "") {
        displayValue += "+";
        updateDisplay();
    }
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
});

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

document.getElementById("seven").addEventListener("click", () => appendNumber("7"));
document.getElementById("eight").addEventListener("click", () => appendNumber("8"));
document.getElementById("nine").addEventListener("click", () => appendNumber("9"));
document.getElementById("four").addEventListener("click", () => appendNumber("4"));
document.getElementById("five").addEventListener("click", () => appendNumber("5"));
document.getElementById("six").addEventListener("click", () => appendNumber("6"));
document.getElementById("one").addEventListener("click", () => appendNumber("1"));
document.getElementById("two").addEventListener("click", () => appendNumber("2"));
document.getElementById("three").addEventListener("click", () => appendNumber("3"));
document.getElementById("zero").addEventListener("click", () => appendNumber("0"));
document.getElementById("decimal").addEventListener("click", () => appendNumber("."));






