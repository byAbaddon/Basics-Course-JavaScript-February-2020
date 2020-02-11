function  recArea(arg) {
  height = Math.abs(arg[0] - arg[2])
  width =  Math.abs(arg[1] - arg[3])
  console.log((height * width).toFixed(2))
  console.log(((height * 2) + (width * 2)).toFixed(2))
}

//recArea(['30', '40' , '70', '-10'])
