let firstOperand = "";
let currentOperator = null;
let secondOperand = "";
let shouldClearCurrentOperationDisplay = false;

const lastOperationDisplay = document.getElementById("lastOperationDisplay");
const currentOperationDisplay = document.getElementById(
  "currentOperationDisplay"
);

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equalsBtn");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", () => evaluate());
clearButton.addEventListener("click", () => clear());
deleteButton.addEventListener("click", () => deleteNumber());
pointButton.addEventListener("click", () => appendPoint());

function clear() {
  currentOperationDisplay.textContent = "0";
  lastOperationDisplay.textContent = "";
  firstOperand = "";
  currentOperator = null;
  secondOperand = "";
  shouldClearCurrentOperationDisplay = false;
}

function appendNumber(number) {
  if (
    currentOperationDisplay.textContent === "0" ||
    shouldClearCurrentOperationDisplay
  )
    clearCurrentOperationDisplay();

  currentOperationDisplay.textContent += number;
}

function deleteNumber() {
  currentOperationDisplay.textContent = currentOperationDisplay.textContent
    .toString()
    .slice(0, -1);
}

function appendPoint() {
  if (shouldClearCurrentOperationDisplay) clearCurrentOperationDisplay();
  if (currentOperationDisplay.textContent === "") {
    currentOperationDisplay.textContent = "0";
  }
  if (currentOperationDisplay.textContent.includes(".")) return;

  currentOperationDisplay.textContent += ".";
}

function clearCurrentOperationDisplay() {
  currentOperationDisplay.textContent = "";
  shouldClearCurrentOperationDisplay = false;
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstOperand = currentOperationDisplay.textContent;
  currentOperator = operator;
  lastOperationDisplay.textContent = `${firstOperand} ${currentOperator}`;
  shouldClearCurrentOperationDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldClearCurrentOperationDisplay) return;

  if (currentOperator === "/" && currentOperationDisplay.textContent === "0") {
    alert("Cannot divide by zero!");
    return;
  }

  secondOperand = currentOperationDisplay.textContent;
  currentOperationDisplay.textContent = roundResult(
    operate(currentOperator, firstOperand, secondOperand)
  );

  lastOperationDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;

  currentOperator = null;
}
function roundResult(result) {
  return Math.round(result * 1000) / 1000;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") setOperator(e.key);
  if (e.key === "Enter" || e.key === "=") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}