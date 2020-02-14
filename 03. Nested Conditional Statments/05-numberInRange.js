function numberinRange(arg) {
  n = +arg[0]
  console.log(n >= -100 && n <= 100  && n !== 0 ? 'Yes' : 'No'); 
}

//numberinRange(['25'])