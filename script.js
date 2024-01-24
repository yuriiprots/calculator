class Calculator {
  constructor() {
    this.currentInput = "";
  }

  // let currentInput = "";

  clearDisplay() {
    this.currentInput = "";
    this.updateDisplay();
  }

  appendNumber(number) {
    this.currentInput += number;
    this.updateDisplay();
  }

  appendOperator(operator) {
    this.currentInput += operator;
    this.updateDisplay();
  }

  calculateResult() {
    try {
      const result = this.evaluateExpression();
      this.currentInput = result.toString();
      this.updateDisplay();
    } catch {
      this.currentInput = "Error";
      this.updateDisplay();
    }
  }

  evaluateExpression() {
    return eval(this.currentInput);
  }

  updateDisplay() {
    const displayElement = document.getElementById("display");
    if (displayElement) {
      displayElement.value = this.currentInput;
    }
  }
}

const calculator = new Calculator();
