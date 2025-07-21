// Grab buttons and display
const btnNums       = document.querySelectorAll(".btn-n");
const btnOps        = document.querySelectorAll(".btn-o");
const btnClearAll   = document.querySelector("#clear");
const btnClearOne   = document.querySelector("#once_clear");
const display       = document.querySelector("input");

// Append digit or operator
function appendToDisplay(char) {
    display.value += char;
}

// Evaluate the expression
function calculate() {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "";
    }
}

// Remove last character
function clearLast() {
    display.value = display.value.slice(0, -1);
}

// Clear everything
function clearAll() {
    display.value = "";
}

// Hook up number buttons
btnNums.forEach(btn =>
    btn.addEventListener("click", () => appendToDisplay(btn.textContent))
);

// Hook up operator buttons, separating “=” from other ops
btnOps.forEach(btn => {
    const text = btn.textContent;
    if (text === "=") {
        btn.addEventListener("click", calculate);
    } else {
        // Normalize your division/multiplication symbols if needed:
        const op = text === "÷" ? "/" : text === "×" ? "*" : text;
        btn.addEventListener("click", () => appendToDisplay(op));
    }
});

// Hook up clears
btnClearAll.addEventListener("click", clearAll);
btnClearOne.addEventListener("click", clearLast);
