let currentInput = "";

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
