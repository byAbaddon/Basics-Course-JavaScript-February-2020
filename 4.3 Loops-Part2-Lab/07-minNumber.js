function minNumber(arg) {
  rmFirstEl = arg.shift()
  console.log(Math.min(...arg));
}
//minNumber(['2', '100', '99']) 