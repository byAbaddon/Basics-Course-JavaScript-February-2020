function numberSequence(arg){
  rmFirst = arg.shift()
  console.log(`Max number: ${Math.max(...arg)}\nMin number: ${Math.min(...arg)}`);
}

//numberSequence(['6', '250', '5', '2', '0', '100','1000'])
