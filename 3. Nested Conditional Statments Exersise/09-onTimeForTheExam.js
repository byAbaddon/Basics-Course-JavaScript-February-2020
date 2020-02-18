

                //TODO

function onTimeForTheExam(arg) {
  [hoursEx, minEx, hoursAr, minAr] = [arg[0], arg[1], arg[2], arg[3]]

  exTime = new Date(0, 0, 0, hoursEx, minEx) //fist time
  examTime  = exTime.getTime(exTime);        //get time ms 

  arTime = new Date(0, 0, 0, hoursAr, minAr) //second time
  arrivalTime = arTime.getTime(arTime);     //get time ms
  
  calcTime = Math.abs(examTime - arrivalTime); //subtract first Time  - second Time
  
  diff = new Date(calcTime);     //new Time from taken above result on CalcTime
  //diff.setHours(+24) //toFix +2 Hours ET 

   //console.log( diff.getHours()  + ':' + diff.getMinutes()); //just print result

   min = +diff.getMinutes()
   hours = +(diff.getHours()- 2)
//console.log( 'hours ' , hours, 'min -> ' , min);


  
    // console.log('On time'} else if (min >= 20) {
    // console.log(`Late\n${min} minutes after the start`);
    // console.log(`On time\n${min} minutes before the start`);  
  
    let examTimeCalc = (hoursEx * 60) + minEx;
    let arrivalTimeCalc = (hoursAr * 60) + minAr;

    let subtractTime = examTimeCalc - arrivalTimeCalc;

    let result = subtractTime % 60
 //   console.log('subtract result = ', result );
   
    
     //console.log('examTime: ' , examTimeCalc ,' arrivalTime: ', arrivalTimeCalc , ' subtract time = ', subtractTime);

       switch (true) {
         case result < 0  && hours <= 0 || hours > 0:
           console.log('Late');
           if (result < -59) {
             console.log(`${hours} hours after the start`)  //TODO
           } else if (result > 0 && hours <= 0){
            console.log(`${min} minutes after the start`)
           } else{
             console.log(`${hours}:${min} hours after the start`);
             
           }
            break;
          case result < 30 && hours > 0:
            console.log('Early');
            if (hours > 0) {
              console.log(`${hours}:00 hours before the start`)
            }else if(hours < 0)
            console.log(`${min} minutes before the start`);  
          break;

         case  result <= 30 || result === 0  :
          console.log("On time");
          if (result > 59) {
            console.log(`${hours} hours before the start`);
          } else if(result > 0){
            console.log(`${min} minutes before the start`);
          }
           break;
         
       }


}

onTimeForTheExam(["9","30","9","50"]);
onTimeForTheExam(["9","00","8","30"]);
onTimeForTheExam(["16","00","15","00"]);
onTimeForTheExam(["9","00","10","30"]);
onTimeForTheExam(["14","00","13","55"]);
onTimeForTheExam(["11","30","8","12"]);
onTimeForTheExam(["10","00","10","00"]);
onTimeForTheExam(["11","30","10","55"]);
onTimeForTheExam(["11","30","12","29"]);
 

