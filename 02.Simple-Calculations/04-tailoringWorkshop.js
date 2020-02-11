function tailoringWorkshop(arg){
  a = +arg[0] * (+arg[1] + 2 * 0.30) * (+arg[2] + 2 * 0.30) 
  b = +arg[0] * (+arg[1] / 2 ) * (+arg[1] /2)
  dolar = (a * 7 + b * 9)
  lv = (dolar * 1.85)
  console.log(`${dolar.toFixed(2)} USD\n${lv.toFixed(2)} BGN`);
 
}

//tailoringWorkshop(['10', '1.20' , '0.65'])
