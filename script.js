const equalsBtn = document.getElementById("equalsBtn");
const currentOperationDisplay = document.getElementById(
  "currentOperationDisplay"
);
const lastOperationDisplay = document.getElementById("lastOperationDisplay");

let operators = ["+", "-", "*", "/"];
// let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstNumber;
let operator;
let secondNumber;
let currentInput = "";
let displayNumber = "";

equalsBtn.addEventListener("click", () => parser(currentInput));
// equalsBtn.addEventListener("click", () => toggleButton(equalsBtn));

// function toggleButton(button) {
//   button.disabled = !button.disabled;
// }

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
}

function appendOperator(operator) {
  currentInput += operator;
  lastOperationDisplay.innerHTML = currentInput;
  displayNumber = "";
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

function parser(expression) {
  let first_operand;
  let operator;
  let second_operand;

  operators.forEach((op) => {
    if (expression.includes(op)) {
      let index = expression.indexOf(op);
      first_operand = Number(expression.slice(0, index));
      operator = expression[index];
      second_operand = Number(
        expression.slice(index + 1, expression.length - 1)
      );
    }
  });

  console.log(first_operand, operator, second_operand);
  operate(first_operand, operator, second_operand);

  // for (let i = 0; i < expression.length; i++) {
  //   if(expression[i] === "+" || expression[i] === "-" || expression[i] === "*" || expression[i] === "/") {
  //     first_operand = Number(expression.slice(0, i));
  //     operator = expression[i];
  //     second_operand = Number(expression.slice(i + 1));
  //   }
  // }
}

function operate(first_operand, operator, second_operand) {
  if (operator === "+") addNumbers(first_operand, second_operand);
  if (operator === "-") subtractNumbers(first_operand, second_operand);
  if (operator === "*") multiplyNumbers(first_operand, second_operand);
  if (operator === "/") divideNumbers(first_operand, second_operand);
}

function addNumbers(first_operand, second_operand) {
  let result = first_operand + second_operand;
  lastOperationDisplay.innerHTML = currentInput;
  currentOperationDisplay.innerHTML = result;
  currentInput = result;
  // let result = String(first_operand + second_operand);
  // updateDisplay(result);
}

function subtractNumbers(first_operand, second_operand) {
  let result = first_operand - second_operand;
  lastOperationDisplay.innerHTML = currentInput;
  currentOperationDisplay.innerHTML = result;
  currentInput = result;

  // let result = String(first_operand - second_operand);
  // updateDisplay(result);
}

function multiplyNumbers(first_operand, second_operand) {
  let result = first_operand * second_operand;
  lastOperationDisplay.innerHTML = currentInput;
  currentOperationDisplay.innerHTML = result;
  currentInput = result;

  // let result = String(first_operand * second_operand);
  // updateDisplay(result);
}

function divideNumbers(first_operand, second_operand) {
  let result = first_operand / second_operand;
  lastOperationDisplay.innerHTML = currentInput;
  currentOperationDisplay.innerHTML = result;
  currentInput = result;
  // let result = String(first_operand / second_operand);
  // updateDisplay(result);
}

// console.log(addNumbers(5, 3));
// console.log(subtractNumbers(5, 3));
// console.log(multiplyNumbers(5, 3));
// console.log(divideNumbers(9, 3));

// class Calculator {
//   constructor() {
//     this.currentInput = "";
//   }

//   // let currentInput = "";

//   clearDisplay() {
//     this.currentInput = "";
//     this.updateDisplay();
//   }

//   appendNumber(number) {
//     this.currentInput += number;
//     this.updateDisplay();
//   }

//   appendOperator(operator) {
//     this.currentInput += operator;
//     this.updateDisplay();
//   }

//   calculateResult() {
//     try {
//       const result = this.evaluateExpression();
//       this.currentInput = result.toString();
//       this.updateDisplay();
//     } catch {
//       this.currentInput = "Error";
//       this.updateDisplay();
//     }
//   }

//   evaluateExpression() {
//     const sanitizedInput = this.currentInput.replace(/[^-()\d/*+.]/g, "");
//     return Function('"use strict";return (' + sanitizedInput + ")")();
//   }

//   updateDisplay() {
//     const displayElement = document.getElementById("display");
//     if (displayElement) {
//       displayElement.value = this.currentInput;
//     }
//   }
// }

// const calculator = new Calculator();
