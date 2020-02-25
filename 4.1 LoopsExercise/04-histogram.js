function histogramun(arg) {
 numCount = arg.shift()

 p1 = arg.filter( el => el < 200).length / numCount * 100
 p2 = arg.filter( el => el >= 200 && el <=399).length / numCount * 100
 p3 = arg.filter( el => el >= 400 && el <=599).length / numCount * 100
 p4 = arg.filter( el => el >= 600 && el <=799).length / numCount * 100
 p5 = arg.filter( el => el >= 800).length / numCount * 100

 console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`); 
}

//histogramun([53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])

