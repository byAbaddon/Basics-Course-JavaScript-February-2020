function invalidNumber(arg) {
  let n = +arg[0]
   if (!( n >= 100 && n <= 200 || n == 0)) {
        console.log('invalid');
   }
}

// invalidNumber(['0']);
//invalidNumber(['150']) 