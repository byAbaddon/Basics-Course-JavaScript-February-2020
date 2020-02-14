function timePlusMinutes(arg) {
  let [start, end] = [0, 5]
  time = new Date(0, 0, 0, arg[0], (+arg[1] + 15))
  time.getHours() < 10 ? ++start && --end: null 
  console.log(time.toString().split(' ')[4].substr(start, end)); 
}
//timePlusMinutes(['11','08'])
