function accountBalance(arg) {
  [num, sum] = [0, 0]
  for (let i = 1; i <= arg[0]; i++) {
     if (arg[i] >=0) {
       num = +arg[i]
       sum += num
       console.log(`Increase: ${num.toFixed(2)}`);   
     } else{
       console.log(`Invalid operation!\nTotal: ${sum.toFixed(2)}`);
       return
     }
  }
  console.log('Total:',sum.toFixed(2));
}
//accountBalance(["3", "5.51", "69.42", "100"]);
//accountBalance(["5", "120", "45.55", "-150"]);
