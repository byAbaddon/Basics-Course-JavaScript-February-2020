function oddEvenSum(arg) {
  evenSum = 0
  oddSum = 0

  for (let i = 1; i < arg.length; i++) {
    if ((i & 1) === 0) {
      evenSum += +arg[i]
    } else {
      oddSum += +arg[i]
    }
  }
  console.log(evenSum === oddSum ? `Yes\nSum = ${evenSum}` : `No\nDiff = ${Math.abs(evenSum - oddSum)}`);
}

// oddEvenSum(['4', '10', '50', '60', '20'])
// oddEvenSum(['4', '3', '5', '1', '-2'])