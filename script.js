let operations = ["+", "-", "*", "/"]
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function addNumbers(first_operand, second_operand) {
  return first_operand + second_operand  
}

function subtractNumbers(first_operand, second_operand) {
  return first_operand - second_operand
}


function multiplyNumbers(first_operand, second_operand) {
  return first_operand * second_operand
}

function divideNumbers(first_operand, second_operand) {
  return first_operand / second_operand
}

function calculateResult(first_operand, second_operand, operator) {
  if (operator === "+") {
    return addNumbers(first_operand, second_operand)
  } else if (operator === "-") {
    return subtractNumbers(first_operand, second_operand)
  } else if (operator === "*") {
    return multiplyNumbers(first_operand, second_operand)
  } else if (operator === "/") {
    return divideNumbers(first_operand, second_operand)
  }
  
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
