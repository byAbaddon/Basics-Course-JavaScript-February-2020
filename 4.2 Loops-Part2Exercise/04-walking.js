function walking(arg) {
  steps = 10000
  allSteps = arg.filter(el => Number(el)).reduce((a, b) => +a + +b) - steps
  console.log(allSteps < 0 ? `${Math.abs(allSteps)} more steps to reach goal.` : `Goal reached! Good job!`);
}
//walking(['1000','1500','2000','6500'])
