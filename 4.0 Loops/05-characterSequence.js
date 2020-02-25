function characterSequence(arg) {
  arg[0].match(/(\w|\W|\s{1})/gim).forEach(el => {console.log(el)});
}
//characterSequence(['ice cream'])
