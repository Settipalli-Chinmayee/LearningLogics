let number = 3;

let char = "*";
let i = number;
let k = 0;

// WHILE LOOP

// while (i > 0 && i <= number) {
//   // console.log(char);
//   char += "*";
//   i--;
// }
// // console.log(char.length);
// let charArr = char.split("");
// while (k < number) {
//   charArr.pop();
// //   console.log(charArr);
//   let stringChar=""
//   for (let j = 0; j < charArr.length; j++) {
//     stringChar +=charArr[j]
// }
// console.log(stringChar)
//   k++;
// }

// DO WHILE LOOP

// do {
//   // console.log(char)
//   char += "*";
//   i--;
// } while (i > 0 && i <= number);

// // console.log(char);
// let charTwo = char.split("");
// do {
//   //   console.log(charTwo);
//   charTwo.pop();
//   let finalChar = "";

//   for (let m = 0; m < charTwo.length; m++) {
//     finalChar += charTwo[m];
//   }
//   console.log(finalChar);

//   k++;
// } while (k < number);

// FOR LOOP

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
  let finalAnswer = ''
  for(let m=0; m<char2.length; m++){
   finalAnswer += char2[m]
  }
  console.log(finalAnswer)
}
