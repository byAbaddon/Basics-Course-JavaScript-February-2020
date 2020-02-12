function numberToText(arg) {

  switch (arg[0]) {
    case '0' : r ='zero'; break;
    case '1' : r ='one'; break;
    case '2' : r ='two'; break;
    case '3' : r ='three'; break;
    case '4' : r ='four'; break;
    case '5' : r ='five'; break;
    case '6' : r ='six'; break;
    case '7' : r ='seven'; break;
    case '8' : r ='eight'; break;
    case '9' : r ='nine'; break;
     default: r = 'number too big'
      break;
  }
  console.log(r); 
 }
 
 //numberToText(['0'])
