const buttons = document.querySelectorAll(".button");
const screen = document.getElementById("screen");
let result = 0;
let res = 1;
let operand;
let operators;
let counter = 0;



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    val = button.innerHTML;
    check(val);
  });
});


function check(digit) {
  if ((digit >= '0' && digit <= '9') || digit === '.') {

    if (digit === '.') {
      if (counter === 0){
        counter++;
        screen.innerHTML += digit;
      }
    }

    else {
    screen.innerHTML += digit;
    }
  }

  else if (digit === '+' || digit === '-' || digit === '*' || digit === '/' || digit === '%' || digit === '+/-') {
    operators = digit;
    calculator(digit);
  }

  else if (digit === '=') {
    calculator(operators);
    screen.innerHTML = result;
    output = screen.innerHTML;
    result = 0;
    res = 1;
    if (screen.innerHTML.includes(".")) {
      counter++;
    }
  }

  else if (digit === "Clear") {
    screen.innerHTML = "";
  }

  else {
    if (screen.innerHTML === "NaN" || screen.innerHTML === "undefined" || screen.innerHTML === "Infinity" || screen.innerHTML === "-Infinity") {
      screen.innerHTML = "";
    }

    else {
    const new_str = screen.innerHTML.slice(0, -1);
    screen.innerHTML = new_str;
    }

  }


}

function calculator(operator) {
  operand = Number(screen.innerHTML);
  counter = 0;
  switch (operator) {
    case '+':
      screen.innerHTML = "";
      result = operand + Number(result);


      break;

    case '-':

      screen.innerHTML = "";
      if (result === 0) {
        result = operand - Number(result);
      }

      else {
        result = Number(result) - operand;
      }

      break;

    case '*':
      screen.innerHTML = "";
      res = Number(res) * operand;
      result = res;

      break;

    case '/':
      screen.innerHTML = "";
      if (res === 1) {
        res = operand / Number(res);
      }
      else {
        res = Number(res) / operand;
      }
      result = res;
      console.log(res);

      break;

    case '%':

      result = operand / 100;

      break;

    case '+/-':

      operand = - (operand);
      screen.innerHTML = operand;
      result = operand;

      break;

    default:

      break;
  }
}







