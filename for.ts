// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Counting: " + i);
}

let battery: number = 3;

while (battery > 0) {
  console.log("Phone is ON. Battery at: " + battery + "%");
  battery--; // Decrease battery by 1 each time
}

console.log("Phone shut down.");