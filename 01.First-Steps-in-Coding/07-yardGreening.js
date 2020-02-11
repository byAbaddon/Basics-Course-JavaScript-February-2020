function yardGreening(arg){
  let subtotal = (arg * 7.61).toFixed(2)
  let discount = (subtotal * 0.18).toFixed(2)
  let total = (subtotal - (subtotal * 0.18)).toFixed(2)
 console.log(`The final price is: ${total} lv.`);
 console.log(`The discount is: ${discount} lv.`);
}

//yardGreening(540)
//yardGreening(135)
