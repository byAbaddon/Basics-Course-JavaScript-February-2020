function moving(arg) {
  freeSpace = +arg[0] * +arg[1] * +arg[2]
  cubicMt = 0
  result = 0
  for (let i = 3; i < arg.length; i++) {

    arg[i] !== 'Done' ? cubicMt += +arg[i] : null
     
    if (arg[i] === 'Done' || freeSpace < cubicMt) {
      result = `No more free space! You need ${Math.abs(freeSpace - cubicMt)} Cubic meters more.`
    }
    if (arg[i] === 'Done' || freeSpace > cubicMt) {
      result = `${(freeSpace - cubicMt)} Cubic meters left.`
    }
  }

  console.log(result);
}


//moving(['10 ','10','2','20','20','20','20','122'])
//  moving([ '10 ', '1', '2', '4', '6',  'Done',])

 
 
 
  

