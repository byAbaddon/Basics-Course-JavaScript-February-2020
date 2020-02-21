function  leftAndRightSum(arg) {
   firstSum = arg.slice(1, +arg[0]+ 1).reduce((a, b) => +a + +b)
   secondSum = arg.slice(-arg[0]).reduce((a, b) => +a + +b)
   console.log(firstSum === secondSum ? `Yes, sum = ${firstSum}`: `No, diff = ${Math.abs(firstSum - secondSum)}`);
}
//leftAndRightSum(['2','10', '90','60', '40']) 
// leftAndRightSum(['3','10', '90','5' , '5','60', '40']) 
