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
const pointButton = document.getElementById("pointBtn");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

equalsButton.addEventListener("click", () => evaluate());
clearButton.addEventListener("click", () => clear());
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

// VARIABLES
// const equalsBtn = document.getElementById("equalsBtn");
// const currentOperationDisplay = document.getElementById(
//   "currentOperationDisplay"
// );
// const lastOperationDisplay = document.getElementById("lastOperationDisplay");
// const operatorBtns = document.querySelectorAll(".operator");

// let operators = ["+", "-", "*", "/"];
// let currentInput = "";
// let displayNumber = "0";
// let firstOperand;
// let operator;
// let secondOperand;
// let result;

// // UPDATE DISPLAY FUNCTION
// const updateCurrentOperationDisplay = (value) => {
//   currentOperationDisplay.innerHTML = value;
// };

// const updatelastOperationDisplayFirst = (
//   firstOperand,
//   operator,
//   secondOperand
// ) => {
//   lastOperationDisplay.innerHTML = `${firstOperand} ${operator} ${secondOperand} =`;
// };

// const updatelastOperationDisplaySecond = (valueOne, valueTwo) => {
//   lastOperationDisplay.innerHTML = `${valueOne} ${valueTwo}`;
// };

// const updatelastOperationDisplayThird = (value) => {
//   lastOperationDisplay.innerHTML = value;
// };

// // ADD EVENT LISTENERS

// function addEventListenersForAllOperators() {
//   equalsBtn.addEventListener("click", handleEqualsBtnClick);
//   operatorBtns.forEach((btn) => {
//     btn.addEventListener("click", handleOperatorsClick);
//   });
// }

// // REMOVE EVENT LISTENERS

// function removeEventListenerForEqualsBtn() {
//   equalsBtn.removeEventListener("click", handleEqualsBtnClick);
// }

// function removeEventListenersForSomeOperators() {
//   operatorBtns.forEach((btn) => {
//     btn.removeEventListener("click", handleOperatorsClick);
//   });
// }

// // HANDLE EQUALS OPERATOR CLICK
// const handleEqualsBtnClick = () => {
//   parser(currentInput);

//   if (
//     operator === "/" &&
//     secondOperand === "0" &&
//     (result === Infinity || result === -Infinity || result === NaN)
//   ) {
//     result = 0;
//     updateCurrentOperationDisplay(displayNumber);
//   }
//   if (
//     (operator !== "/" && secondOperand !== "0") ||
//     (operator === "/" && secondOperand !== "0")
//   ) {
//     updateCurrentOperationDisplay(result);
//     currentInput = result.toString();
//     removeEventListenerForEqualsBtn();
//     displayNumber = result.toString();
//   }
// };

// // HANDLE OPERATORS CLICK
// const handleOperatorsClick = () => {
//   let currentInputTwo = currentInput.slice(0, -1);
//   let searchOperator = currentInput[currentInput.length - 1];

//   parser(currentInputTwo);

//   if (
//     result === Infinity ||
//     result === -Infinity ||
//     result === NaN ||
//     result === 0
//   ) {
//     currentInput = "0";
//     appendOperator(searchOperator);

//     updateCurrentOperationDisplay(0);
//   }
//   if (
//     (operator !== "/" && secondOperand !== "0") ||
//     (operator === "/" && secondOperand !== "0")
//   ) {
//     updateCurrentOperationDisplay(result);
//     currentInput = result.toString();
//     displayNumber = result.toString();
//     appendOperator(searchOperator);
//   }
// };

// // DELETE NUMBER FUNCTION

// function deleteNumber() {
//   if (displayNumber.length === 0) {
//     return;
//   }
//   if (currentInput[currentInput.length - 1] !== currentInput.match(/[+\-*/]/)) {
//     currentInput = currentInput.slice(0, -1);
//     displayNumber = displayNumber.slice(0, -1);
//   }

//   updateCurrentOperationDisplay(displayNumber);

//   if (!currentInput.match(/(-?\d*(\.\d+)?)([+\-*/])(-?\d*(\.\d+)?)/)) {
//     removeEventListenerForEqualsBtn();
//     removeEventListenersForSomeOperators();
//   }
// }

// // CLEAR DISPLAY FUNCTION
// function clearDisplay() {
//   currentInput = "";
//   displayNumber = "0";

//   updateCurrentOperationDisplay(displayNumber);
//   updatelastOperationDisplayThird("");
// }

// // APPEND NUMBER FUNCTION

// function appendNumber(number) {
//   if (displayNumber === "0" && operator === "/" && secondOperand === "0") {
//     currentInput = currentInput.slice(0, -1);
//     displayNumber = "";
//   }

//   if (displayNumber === "0" && currentInput.length === 0) {
//     displayNumber = "";
//   }

//   if (
//     currentInput[0] === "0" &&
//     number === "0" &&
//     !displayNumber.includes(".") &&
//     !currentInput.includes(".") &&
//     currentInput.includes(operator)
//   ) {
//     return;
//   }

//   if (displayNumber === "" && number === ".") {
//     displayNumber = "0";
//   }

//   if (number === "." && displayNumber.includes(".")) {
//     return;
//   }

//   displayNumber += number;
//   currentInput += number;

//   updateCurrentOperationDisplay(displayNumber);

//   if (currentInput.match(/(-?\d*(\.\d+)?)([+\-*/])(-?\d*(\.\d+)?)/))
//     addEventListenersForAllOperators();
// }

// // APPEND OPERATOR FUNCTION
// function appendOperator(operator) {
//   displayNumber = "";

//   if (currentInput.length === 0) {
//     currentInput = "0";
//   }

//   if (
//     (currentInput.slice(-1) === "0" && currentInput.slice(-2, -1) === "/") ||
//     (currentInput.slice(0, 1) === "0" && currentInput.slice(-1) === "0") ||
//     result === Infinity ||
//     result === -Infinity ||
//     result === NaN
//   ) {
//     currentInput = "0";
//     displayNumber = "";
//   }

//   if (operators.includes(currentInput.slice(-1))) {
//     currentInput = currentInput.slice(0, -1) + operator;
//   } else {
//     currentInput += operator;
//   }

//   updatelastOperationDisplaySecond(currentInput.slice(0, -1), operator);
//   removeEventListenerForEqualsBtn();
// }

// // PARSER FUNCTION
// function parser(expression) {
//   let index;
//   let sign;

//   if (expression[0] === "-") {
//     expression = expression.slice(1);
//     sign = "-";
//   }

//   operators.forEach((op) => {
//     if (expression.includes(op)) {
//       index = expression.indexOf(op);
//       firstOperand = expression.slice(0, index);
//       operator = expression[index];
//       secondOperand = expression.slice(index + 1, expression.length);
//     }
//   });

//   if (sign) {
//     firstOperand = sign + firstOperand;
//   }

//   if (operator == "/" && secondOperand === "0") {
//     alert("Cannot divide by zero!");
//   } else {
//     updatelastOperationDisplayFirst(firstOperand, operator, secondOperand);
//   }

//   operate(firstOperand, operator, secondOperand);
// }

// // OPERATE FUNCTION
// function operate(firstOperand, operator, secondOperand) {
//   firstOperand = Number(firstOperand);
//   secondOperand = Number(secondOperand);

//   if (operator == "+") result = firstOperand + secondOperand;
//   if (operator == "-") result = firstOperand - secondOperand;
//   if (operator == "*") result = firstOperand * secondOperand;
//   if (operator == "/") result = firstOperand / secondOperand;

//   result = parseFloat(result.toFixed(3));

//   removeEventListenersForSomeOperators();
// }
