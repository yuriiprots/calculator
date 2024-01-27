// let operations = ["+", "-", "*", "/"];
// let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstNumber;
let operator;
let secondNumber;
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

function updateDisplay() {
  const displayElement = document.getElementById("display");
  if (displayElement) {
    displayElement.value = currentInput;
  }
}

function parser(expression) {
  let first_operand;
  let operator;
  let second_operand;

  
}


function addNumbers(first_operand, second_operand) {
  return first_operand + second_operand;
}

function subtractNumbers(first_operand, second_operand) {
  return first_operand - second_operand;
}

function multiplyNumbers(first_operand, second_operand) {
  return first_operand * second_operand;
}

function divideNumbers(first_operand, second_operand) {
  return first_operand / second_operand;
}

console.log(addNumbers(5, 3));
console.log(subtractNumbers(5, 3));
console.log(multiplyNumbers(5, 3));
console.log(divideNumbers(9, 3));

function operate(first_operand, operator, second_operand) {
  if (operator === "+") return addNumber(first_operand, second_operand);
  if (operator === "-") return subtractNumbers(first_operand, second_operand);
  if (operator === "*") return multiplyNumbers(first_operand, second_operand);
  if (operator === "/") return divideNumbers(first_operand, second_operand);
}

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
