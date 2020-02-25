function halfSumElement(arg) {
  removeFirstNum = arg.shift()
  bigNum = Math.max(...arg)
  sumAllNum = arg.reduce((a, b) => +a + +b) - bigNum 
  console.log(sumAllNum === bigNum ? `Yes\nSum = ${bigNum}`: `No\nDiff = ${Math.abs(sumAllNum - bigNum)}`);
}

//halfSumElement(['7','3','4','1','1','2','12','1',]) 
//halfSumElement([ '3','5','5','1', ]) 
       
        
        
   
        
        
    
             