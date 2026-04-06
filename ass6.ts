let temperature: number = 25;

if (temperature > 30) {
  console.log("It's a hot day! ☀️");
} else if (temperature > 20) {
  console.log("The weather is nice. 🌤️");
} else {
  console.log("It's a bit chilly. ☁️");
}

//Switch

let dayNumber: number = 3;

switch (dayNumber) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Unknown day");
}