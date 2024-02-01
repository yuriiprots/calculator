const equalsBtn = document.getElementById("equalsBtn");
const currentOperationDisplay = document.getElementById(
  "currentOperationDisplay"
);
const lastOperationDisplay = document.getElementById("lastOperationDisplay");
const operatorBtns = document.querySelectorAll(".operator");

let operators = ["+", "-", "*", "/"];

let currentInput = "";
let displayNumber = "0";
let firstOperand;
let operator;
let secondOperand;
let result;

const handleOperatorsClick = () => {
  parser(currentInput);

  console.log(result);
  console.log(operator);
  console.log(secondOperand);
  if (
    operator === "/" &&
    secondOperand === "0" &&
    (result === Infinity || result === -Infinity || result === NaN)
  ) {
    result = 0;
    console.log(currentInput);
    console.log(result);
    currentOperationDisplay.innerHTML = displayNumber;
  }
  if (
    (operator !== "/" && secondOperand !== "0") ||
    (operator === "/" && secondOperand !== "0")
  ) {
    console.log(result);
    currentOperationDisplay.innerHTML = result;
    console.log(currentInput);
    currentInput = result.toString();
    console.log(currentInput);
    equalsBtn.removeEventListener("click", handleOperatorsClick);
    displayNumber = result.toString();
  }
};

const handleOperatorsClickTwo = () => {
  let currentInputTwo = currentInput.slice(0, -1);
  console.log(currentInputTwo);
  let searchOperator = currentInput[currentInput.length - 1];
  console.log(searchOperator);

  console.log(result);

  parser(currentInputTwo);

  if (
    result === Infinity ||
    result === -Infinity ||
    result === NaN ||
    result === 0
  ) {
    currentInput = "0";
    appendOperator(searchOperator);
    console.log(currentInput);
    console.log(displayNumber);
    currentOperationDisplay.innerHTML = 0;
  }
  if (
    (operator !== "/" && secondOperand !== "0") ||
    (operator === "/" && secondOperand !== "0")
  ) {
    currentOperationDisplay.innerHTML = result;
    console.log(currentInput);
    currentInput = result.toString();
    displayNumber = result.toString();
    appendOperator(searchOperator);
  }
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

  if (!currentInput.match(/(-?\d*(\.\d+)?)([+\-*/])(-?\d*(\.\d+)?)/)) {
    equalsBtn.removeEventListener("click", handleOperatorsClick);
    operatorBtns.forEach((btn) => {
      btn.removeEventListener("click", handleOperatorsClickTwo);
    });
  }
}

function clearDisplay() {
  currentInput = "";
  displayNumber = "0";
  currentOperationDisplay.innerHTML = displayNumber;
  lastOperationDisplay.innerHTML = "";
  firstOperand = NaN;
  operator = NaN;
  secondOperand = NaN;
}

function appendNumber(number) {
  console.log(number);
  console.log(displayNumber);
  console.log(currentInput);

  if (displayNumber === "0" && operator === "/" && secondOperand === "0") {
    currentInput = currentInput.slice(0, -1);
    console.log(currentInput);
    displayNumber = "";
  }

  if (displayNumber === "0" && currentInput.length === 0) {
    displayNumber = "";
  }

  if (
    currentInput[0] === "0" &&
    number === "0" &&
    !displayNumber.includes(".") &&
    !currentInput.includes(".") &&
    currentInput.includes(operator)
  ) {
    return;
  }

  if (displayNumber === "" && number === ".") {
    displayNumber = "0";
  }

  if (number === "." && displayNumber.includes(".")) {
    return;
  }

  console.log(number);
  displayNumber += number;
  console.log(displayNumber);

  currentInput += number;
  console.log(currentInput);
  currentOperationDisplay.innerHTML = displayNumber;


  if (currentInput.match(/(-?\d*(\.\d+)?)([+\-*/])(-?\d*(\.\d+)?)/)) {
    equalsBtn.addEventListener("click", handleOperatorsClick);
    operatorBtns.forEach((btn) => {
      btn.addEventListener("click", handleOperatorsClickTwo);
    });
  }
}

const appendOperator = (operator) => {
  console.log(currentInput);
  if (currentInput.length === 0) {
    currentInput = "0";
  }

  console.log(result);

  if (
    (currentInput.slice(-1) === "0" && currentInput.slice(-2, -1) === "/") ||
    result === Infinity ||
    result === -Infinity ||
    result === NaN ||
    result === 0
  ) {
    currentInput = "0";
    displayNumber = "";
  }

  console.log(currentInput);


  if (operators.includes(currentInput.slice(-1))) {
    currentInput = currentInput.slice(0, -1) + operator;
    lastOperationDisplay.innerHTML = `${currentInput.slice(0, -1)} ${operator}`;
  } else {
    currentInput += operator;
    lastOperationDisplay.innerHTML = `${currentInput.slice(0, -1)} ${operator}`;
  }
  console.log(currentInput);
  // lastOperationDisplay.innerHTML = currentInput;
  displayNumber = "";
  equalsBtn.removeEventListener("click", handleOperatorsClick);
};

function parser(expression) {
  let index;
  let sign;

  if (expression[0] === "-") {
    expression = expression.slice(1);
    sign = "-";
  }

  console.log(expression);

  operators.forEach((op) => {
    if (expression.includes(op)) {
      index = expression.indexOf(op);
      firstOperand = expression.slice(0, index);
      console.log(firstOperand);
      operator = expression[index];
      console.log(operator);
      secondOperand = expression.slice(index + 1, expression.length);
      console.log(secondOperand);
    }
  });

  if (sign) {
    firstOperand = sign + firstOperand;
  }

  if (operator == "/" && secondOperand === "0") {
    alert("Cannot divide by zero!");
  } else {
    console.log(firstOperand, operator, secondOperand);
    lastOperationDisplay.innerHTML = `${firstOperand} ${operator} ${secondOperand} =`;
  }
  //console.log(firstOperand, operator, secondOperand);
  operate(firstOperand, operator, secondOperand);
}

function operate(firstOperand, operator, secondOperand) {
  firstOperand = Number(firstOperand);
  console.log(firstOperand);
  secondOperand = Number(secondOperand);
  console.log(secondOperand);

  if (operator == "+") result = firstOperand + secondOperand;
  if (operator == "-") result = firstOperand - secondOperand;
  if (operator == "*") result = firstOperand * secondOperand;
  if (operator == "/") result = firstOperand / secondOperand;

  console.log(result);
  result = parseFloat(result.toFixed(3));
  console.log(result);
  operatorBtns.forEach((btn) => {
    btn.removeEventListener("click", handleOperatorsClickTwo);
  });
}
