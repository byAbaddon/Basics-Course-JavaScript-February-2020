function operationsBetweenNumbers(arg) {
  [x, y, operator, result] = [arg[0], arg[1], arg[2], 0];
  sum = eval(x + operator + y);

  if (sum === Infinity || sum !== sum) {
    console.log(`Cannot divide ${x} by zero`);
  } else if (operator === "/") {
    sum = sum.toFixed(2);
    console.log(`${x} ${operator} ${y} = ${sum}`);
  } else if (operator === "%") {
    console.log(`${x} ${operator} ${y} = ${sum}`);
  } else {
    result = (sum & 1) === 0 ? "even" : "odd";
    console.log(`${x} ${operator} ${y} = ${sum} - ${result}`);
  }
}

//operationsBetweenNumbers(['10', '12', '+'])
//operationsBetweenNumbers(["10", "0", "%"]);