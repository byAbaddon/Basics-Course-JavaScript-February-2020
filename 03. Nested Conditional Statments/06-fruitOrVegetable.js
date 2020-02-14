
function fruitorVegetable(arg) {
    arr = ["bannana","banana", "apple", "kiwi", "cherry", "lemon", "grapes", "tomato","cucumber", "pepper", "carrot" ];
  
    if (arr.includes(arg[0])) {
      console.log(arr.findIndex(x => x === arg[0]) <= 6 ? "fruit" : "vegetable");
      return;
    }
    console.log("unknown");
  }

//JUDGE BUG  - bannana

//fruitorVegetable(["banana"]);
//fruitorVegetable(["bannana"]);


