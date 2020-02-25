function salary(arg) {
  selary = arg[1]
  fb = arg.filter(el => el === 'Facebook').length * 150
  is = arg.filter(el => el === 'Instagram').length * 100
  rd = arg.filter(el => el === 'Reddit').length * 50
  total = selary - (fb+ is + rd)
  console.log(total <= 0 ? `You have lost your salary.` : `${total.toFixed(0)}`);
}

//salary(['3', '500', 'Github.com', 'Stackoverflow.com', 'softuning'])
