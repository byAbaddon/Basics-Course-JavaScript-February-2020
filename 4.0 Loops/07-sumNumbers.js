function sumNumbers(arg) {
  console.log(arg[0] === '0' ? 0 : arg.slice(1).reduce((a, b) => +a + +b)) ;
}

//sumNumbers(['3', '-10', '-20', '-30'])
//sumNumbers(['0'])