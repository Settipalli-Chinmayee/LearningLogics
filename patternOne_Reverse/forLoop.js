let number = 3;

let char = "*";

for (let q = 0; q < number; q++) {
  // console.log(char)
  char += "*";
}
// console.log(char)
let char2 = char.split("");
// console.log(char2)
for (let i = 0; i <= char2.length; i++) {
  char2.pop();
  //   console.log(char2)
  let finalAnswer = "";
  for (let m = 0; m < char2.length; m++) {
    finalAnswer += char2[m];
  }
  console.log(finalAnswer);
}
