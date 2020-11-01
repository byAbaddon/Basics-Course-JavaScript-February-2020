function smartLily(...arg) {      //[be black Ninja]//
    let [age, washingMachinePrice, toyPrice, toysCount, moneyFromBirthdays] = [...arg, 0, 0]
    for (let i = 1; i <= age; i++) i % 2 == 1 ? toysCount++ : (moneyFromBirthdays += 10 * i / 2, moneyFromBirthdays--)
    let money = moneyFromBirthdays + toyPrice * toysCount
    return money >= washingMachinePrice ? `Yes! ${(money - washingMachinePrice).toFixed(2)}`: `No! ${(washingMachinePrice - money).toFixed(2)}`
}

// console.log(smartLily(10, 170.00, 6))
// console.log(smartLily(21, 1570.98, 3))


//-----------------------------------------------------(2)-------------second solution

function cleverLily(arg) {
  [age, laundryPrice, toysPrice] = [+arg[0], +arg[1], +arg[2]]
   moneyCount = 0;
   toysCount = 0;
  let brotherReket = 0; 
   for (let i = 1; i <= age; i++) {
     if ((i & 1) === 0) {
       moneyCount += (10 * i);
       brotherReket++; 
     } else {
         toysCount++;
       };
   }; 
     toysCount *= toysPrice ;
  
     let subtotal = (toysCount + (moneyCount / 2)) - brotherReket;
     let total = Math.abs(subtotal - laundryPrice);

     if (subtotal >= laundryPrice ) {
        console.log(`Yes! ${(total.toFixed(2))}`);
      
     } else {
      console.log(`No! ${(total.toFixed(2))}`);
      };
}

//cleverLily(['10', '170', '6']) 
