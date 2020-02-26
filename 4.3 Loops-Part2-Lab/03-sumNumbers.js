function sumNumbers(arg) {
 console.log(arg.filter(a => a.length < 4).reduce((a, b) => +a + +b));  
}
//sumNumbers(['10', '20', '30', '45', 'Stop'])
