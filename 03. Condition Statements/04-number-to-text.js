function numberToText(arg) {
  arr  = ['zero','one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ]
  console.log( arg[0] < 10 ? arr[arg[0]] : 'number too big');
}
 
//numberToText(['0'])
