function oddEvenPosition(arg) {
  let loopEl = +arg[0];
  let [oddSum, oddMin, oddMax] = [0, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] 
  let [evenSum, evenMin, evenMax] = [0, Number.POSITIVE_INFINITY , Number.NEGATIVE_INFINITY] 

  for (var i = 1; i <= loopEl; i++) {
    let el = +arg[i]

      if (i % 2 != 0) {
          oddSum += el;
          el > oddMax ? oddMax = el : null
          el < oddMin ? oddMin = el : null 
 
      } else {
          evenSum += el;
          el > evenMax ? evenMax = el : null
          el < evenMin ? evenMin = el : null 
      }
  }
  oddMin === Number.POSITIVE_INFINITY ? oddMin = 'No' :  oddMin  =  oddMin.toFixed(2) 
  oddMax === Number.NEGATIVE_INFINITY ? oddMax = 'No' :  oddMax  =  oddMax.toFixed(2)
  evenMin === Number.POSITIVE_INFINITY ? evenMin = 'No' : evenMin = evenMin.toFixed(2)
  evenMax === Number.NEGATIVE_INFINITY ? evenMax = 'No' : evenMax = evenMax.toFixed(2)

  console.log(`OddSum=${oddSum.toFixed(2)},\nOddMin=${oddMin},\nOddMax=${oddMax},`);
  console.log(`EvenSum=${evenSum.toFixed(2)},\nEvenMin=${evenMin},\nEvenMax=${evenMax}`);
}

//  oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);
//  oddEvenPosition([2, 1.5, -2.5]);
//  oddEvenPosition([1, 1]);
//  oddEvenPosition([0]);

 

