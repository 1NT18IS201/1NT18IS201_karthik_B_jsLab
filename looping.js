// simple code to show looping
// Karthik Senthil, 1NT18IS201

let bts = [
  "RM",
  90,
  "Jin",
  90,
  "SUGA",
  90,
  "J-Hope",
  90,
  "Jimin",
  90,
  "V",
  90,
  "JungKook",
  90,
];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

bts.forEach((element) => {
  console.log(`${element} + 10`);
});

bts.forEach((element) => {
  console.log(element + 10);
});

bts.forEach((element) => {
  if (element == 90) console.log(element + 20);
  else console.log(element);
});

bts.forEach((element) => {
  if (element === 90) console.log(element + 20);
  else console.log(element);
});
