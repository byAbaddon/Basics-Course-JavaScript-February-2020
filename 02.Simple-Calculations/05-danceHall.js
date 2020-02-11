function danceHall(arg){
  let hall = (arg[0] * 100) * (arg[1] * 100)           
  let checkroom = ((arg[2] * 100) * (arg[2] * 100))    
  let bench = hall / 10
  let denceSpace = 40 + 7000
  let freeSpace = hall - (checkroom + bench)
  console.log(Math.floor(freeSpace / denceSpace))
}
//danceHall(['50', '25', '2']) 
