const equalsBtn = document.getElementById("equalsBtn");
const currentOperationDisplay = document.getElementById(
  "currentOperationDisplay"
);
const lastOperationDisplay = document.getElementById("lastOperationDisplay");
const operatorBtns = document.querySelectorAll(".operator");

let operators = ["+", "-", "*", "/"];
// let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstNumber;
let operator;
let secondNumber;
let currentInput = "";
let displayNumber = "";
let currentOperator = "";

// equalsBtn.addEventListener("click", () => {
//   parser(currentInput);
// });

const handleEquelsButtonClick = () => {
  parser(currentInput);
};

function clearDisplay() {
  currentInput = "";
  currentOperationDisplay.innerHTML = "";
  lastOperationDisplay.innerHTML = "";
  displayNumber = "";
}

function appendNumber(number) {
  displayNumber += number;
  currentInput += number;
  currentOperationDisplay.innerHTML = displayNumber;
  equalsBtn.addEventListener("click", handleEquelsButtonClick);
}

function appendOperator(operator) {
  console.log(currentInput);
  let operatorCount = currentInput
    .split("")
    .filter((char) => operators.includes(char)).length;

  if (operatorCount === 1 && operators.includes(currentInput.slice(-1))) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  console.log(currentInput);
  lastOperationDisplay.innerHTML = currentInput;

  // if (currentOperator.length === 0) {
  //   currentOperator += operator;
  //   currentInput += currentOperator;
  // }
  // if (currentOperator.length >= 1) {
  //   currentOperator = operator;
  // currentOperator = currentOperator.slice(0, -1);
  // console.log(currentOperator);
  // currentInput = currentInput.slice(0, -1) + currentOperator;
  // }

  // console.log(currentInput);
  // operators.forEach((op) => {
  //   if (currentInput.includes(op)) {
  //     lastOperationDisplay.innerHTML = currentInput;
  //   }
  // if (!currentInput.includes(op)) {
  //   currentInput += currentOperator;
  //   lastOperationDisplay.innerHTML = currentInput;
  // }
  // });
  // console.log(currentInput);
  // currentInput += currentOperator;
  // lastOperationDisplay.innerHTML = currentInput;
  // currentInput += operator;
  currentOperator = "";
  displayNumber = "";
  equalsBtn.removeEventListener("click", handleEquelsButtonClick);
}

function parser(expression) {
  let first_operand;
  let operator;
  let second_operand;
  let index;

  operators.forEach((op) => {
    if (expression.includes(op)) {
      index = expression.indexOf(op);
      first_operand = Number(expression.slice(0, index));
      operator = expression[index];
      second_operand = Number(expression.slice(index + 1, expression.length));
    }
  });

  // if (second_operand === undefined) return;

  console.log(first_operand, operator, second_operand);
  operate(first_operand, operator, second_operand);
}

function operate(first_operand, operator, second_operand) {
  firstNumber = first_operand;
  secondNumber = second_operand;
  if (operator === "+") addNumbers(first_operand, second_operand);
  if (operator === "-") subtractNumbers(first_operand, second_operand);
  if (operator === "*") multiplyNumbers(first_operand, second_operand);
  if (operator === "/") divideNumbers(first_operand, second_operand);
}

function addNumbers(first_operand, second_operand) {
  let result = first_operand + second_operand;
  lastOperationDisplay.innerHTML = currentInput + "=";
  currentOperationDisplay.innerHTML = result;
  currentInput = result.toString();
  console.log(currentInput);
}

function subtractNumbers(first_operand, second_operand) {
  let result = first_operand - second_operand;
  lastOperationDisplay.innerHTML = currentInput + "=";
  currentOperationDisplay.innerHTML = result;
  currentInput = result.toString();
  console.log(currentInput);
}

function multiplyNumbers(first_operand, second_operand) {
  let result = first_operand * second_operand;
  lastOperationDisplay.innerHTML = currentInput + "=";
  currentOperationDisplay.innerHTML = result;
  currentInput = result.toString();
  console.log(currentInput);
}

function divideNumbers(first_operand, second_operand) {
  let result = first_operand / second_operand;
  lastOperationDisplay.innerHTML = currentInput + "=";
  currentOperationDisplay.innerHTML = result;
  currentInput = result.toString();
  console.log(currentInput);
}

// function updateDisplay(input) {
//   if (currentOperationDisplay) {
//     currentOperationDisplay.innerHTML = input;
//   }

//   if (input.match(/[+\-*/]/)) {
//     if (lastOperationDisplay) {
//       lastOperationDisplay.innerHTML = input;
//     }
//   }
// }
