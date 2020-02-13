function bonusScore(arg) {
  n = +arg[0]

  switch (true) {
    case n <= 100 : result = n + 5; break;
    case n > 100 && n <= 1000:  result = n * 1.20; break;
    case n > 1000 : result = n * 1.10; break;
  }  

   n % 2  === 0 ? result+= 1: result  // n = even
   n % 10 === 5 ? result+= 2: result  // n = end of 5
     
 points = Math.abs(n - result)
 console.log(`${points}\n${result}`);
  
}

//bonusScore(['2703'])

