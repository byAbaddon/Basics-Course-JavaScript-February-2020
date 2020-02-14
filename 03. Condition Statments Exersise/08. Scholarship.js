function scholarship(arg) {
  [income, grade, minSalary] = [arg[0], arg[1], arg[2]]
  stipendia = 0 
  excellent = 0

  income < minSalary && grade > 4.50 ? stipendia = minSalary * 0.35 : null
  grade > 5.50 ?  excellent = grade * 25 : null

 if (excellent > stipendia ) {
     console.log (`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`)
 }
 else if (excellent < stipendia && income < minSalary) {
     console.log (`You get a Social scholarship ${Math.floor(stipendia)} BGN`)
 }
 else {
     console.log ("You cannot get a scholarship!")
 }

}
//87 points only

// scholarship(['480.00','4.60','450.00'])
// scholarship(['300.00','5.65','420.00'])
// scholarship(['300.00','5.65','420.00'])



