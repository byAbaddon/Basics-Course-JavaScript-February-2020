function animalType(arg) {
  result = "";
  switch (arg[0]) {
    case "dog":
      result = "mammal";
      break;
    case "snake":
    case "tortoise":
    case "crocodile":
      result = "reptile";
      break;
    default:
      result = "unknown";
      break;
  }
  console.log(result);
}

//animalType(["dog"]);
//animalType(["snake"]);
//animalType(["cat"]);
