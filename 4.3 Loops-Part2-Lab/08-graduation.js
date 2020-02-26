function graduation(arg) {
  let name = arg.shift()
  let grade = 0
  let count = 0

  while (count < 12) {
    extractNum = +arg.shift()
    if (extractNum >= 4.0) {
      grade += extractNum
      count++

    }
  }

  if ( grade >= 4.00) {
  console.log(`${name} graduated. Average grade: ${(grade / 12).toFixed(2)}`);
  }
}

// graduation(['Ani', '5', '5.32', '6', '5.43', '5', '6', '5.5', '4.55', '5', '6', '5.56', '6'])
//graduation(['Pesho', '4', '5.5', '6', '5.43', '4.5', '6', '5.55', '5', '6', '6', '5.43', '5', '6'])