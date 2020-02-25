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
  
     let subtotal = (toysCount + (moneyCount / 2)) - brotherReket; // 550 + 33 -10 = 573
     let total = Math.abs(subtotal - laundryPrice);

     if (subtotal >= laundryPrice ) {
        console.log(`Yes! ${(total.toFixed(2))}`);
      
     } else {
      console.log(`No! ${(total.toFixed(2))}`);
      };
}

//cleverLily(['10', '170', '6']) 
