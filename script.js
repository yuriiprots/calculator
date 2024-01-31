const equalsBtn = document.getElementById("equalsBtn");
const currentOperationDisplay = document.getElementById(
  "currentOperationDisplay"
);
const lastOperationDisplay = document.getElementById("lastOperationDisplay");
const operatorBtns = document.querySelectorAll(".operator");

let operators = ["+", "-", "*", "/"];

let currentInput = "";
let displayNumber = "";
let result;
// equalsBtn.addEventListener("click", () => {
//   parser(currentInput);
// });

const handleOperatorsClick = () => {
  parser(currentInput);

  currentOperationDisplay.innerHTML = result;
  currentInput = result.toString();
  equalsBtn.removeEventListener("click", handleOperatorsClick);
  displayNumber = result.toString();
};

const handleOperatorsClickTwo = () => {
  let currentInputTwo = currentInput.slice(0, -1);
  let searchOperator = currentInput[currentInput.length - 1];
  console.log(searchOperator);
  parser(currentInputTwo);

  currentOperationDisplay.innerHTML = result;

  currentInput = result.toString();
  appendOperator(searchOperator);
};

function deleteNumber() {
  console.log(displayNumber);
  if (displayNumber.length === 0) {
    return;
  }
  if (currentInput[currentInput.length - 1] !== currentInput.match(/[+\-*/]/)) {
    currentInput = currentInput.slice(0, -1);
    displayNumber = displayNumber.slice(0, -1);
  }
  console.log(currentInput);
  console.log(displayNumber);
  currentOperationDisplay.innerHTML = displayNumber;
  if (!currentInput.match(/(\d+)([+\-*/])(\d+)/)) {
    equalsBtn.removeEventListener("click", handleOperatorsClick);
    operatorBtns.forEach((btn) => {
      btn.removeEventListener("click", handleOperatorsClickTwo);
    });
  }
}

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

  // if (currentInput.match(/[+\-*/]/)) {
  //   operatorBtns.forEach((btn) => {
  //     btn.addEventListener("click", handleOperatorsClick);
  //   });
  // }
  if (currentInput.match(/(\d+)([+\-*/])(\d+)/)) {
    equalsBtn.addEventListener("click", handleOperatorsClick);
    operatorBtns.forEach((btn) => {
      btn.addEventListener("click", handleOperatorsClickTwo);
    });
  }

  // operatorBtns.forEach((btn) => {
  //   btn.removeEventListener("click", handleOperatorsClick);
  // });
}
const appendOperator = (operator) => {
  if (currentInput.length === 0) {
    return;
  }

  if (operators.includes(currentInput.slice(-1))) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }

  // if (currentInput.match(/(\d+)([+\-*/])(\d+)/)) {
  //   operatorBtns.forEach((btn) => {
  //     btn.addEventListener("click", handleOperatorsClick);
  //   });
  // }
  console.log(currentInput);
  lastOperationDisplay.innerHTML = currentInput;
  displayNumber = "";
  equalsBtn.removeEventListener("click", handleOperatorsClick);
};

function parser(expression) {
  let firstOperand;
  let operator;
  let secondOperand;
  let index;

  operators.forEach((op) => {
    if (expression.includes(op)) {
      index = expression.indexOf(op);
      firstOperand = Number(expression.slice(0, index));
      operator = expression[index];
      secondOperand = Number(expression.slice(index + 1, expression.length));
    }
  });

  lastOperationDisplay.innerHTML = `${firstOperand} ${operator} ${secondOperand} =`;
  console.log(firstOperand, operator, secondOperand);
  operate(firstOperand, operator, secondOperand);
}

function operate(firstOperand, operator, secondOperand) {
  if (operator == "+") result = firstOperand + secondOperand;
  if (operator == "-") result = firstOperand - secondOperand;
  if (operator == "*") result = firstOperand * secondOperand;
  if (operator == "/") result = firstOperand / secondOperand;

  operatorBtns.forEach((btn) => {
    btn.removeEventListener("click", handleOperatorsClickTwo);
  });
}

// if (operator === "+") addNumbers(first_operand, second_operand);
// if (operator === "-") subtractNumbers(first_operand, second_operand);
// if (operator === "*") multiplyNumbers(first_operand, second_operand);
// if (operator === "/") divideNumbers(first_operand, second_operand);

// function addNumbers(first_operand, second_operand) {
//   let result = first_operand + second_operand;
//   lastOperationDisplay.innerHTML = currentInput + "=";
//   currentOperationDisplay.innerHTML = result;
//   currentInput = result.toString();
//   console.log(currentInput);
//   // operatorBtns.forEach((btn) => {
//   //   btn.removeEventListener("click", handleOperatorsClick);
//   // });
// }

// function subtractNumbers(first_operand, second_operand) {
//   let result = first_operand - second_operand;
//   lastOperationDisplay.innerHTML = currentInput + "=";
//   currentOperationDisplay.innerHTML = result;
//   currentInput = result.toString();
//   console.log(currentInput);
//   // operatorBtns.forEach((btn) => {
//   //   btn.removeEventListener("click", handleOperatorsClick);
//   // });
// }

// function multiplyNumbers(first_operand, second_operand) {
//   let result = first_operand * second_operand;
//   lastOperationDisplay.innerHTML = currentInput + "=";
//   currentOperationDisplay.innerHTML = result;

//   currentInput = result.toString();
//   console.log(currentInput);
//   // operatorBtns.forEach((btn) => {
//   //   btn.removeEventListener("click", handleOperatorsClick);
//   // });
// }

// function divideNumbers(first_operand, second_operand) {
//   let result = first_operand / second_operand;
//   lastOperationDisplay.innerHTML = currentInput + "=";
//   currentOperationDisplay.innerHTML = result;
//   currentInput = result.toString();
//   console.log(currentInput);
//   // operatorBtns.forEach((btn) => {
//   //   btn.removeEventListener("click", handleOperatorsClick);
//   // });
// }

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
