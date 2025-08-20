let number = 3;

let char = "*";
let i = number;
let k = 0;

do {
  // console.log(char)
  char += "*";
  i--;
} while (i > 0 && i <= number);

// console.log(char);
let charTwo = char.split("");
do {
  //   console.log(charTwo);
  charTwo.pop();
  let finalChar = "";

  for (let m = 0; m < charTwo.length; m++) {
    finalChar += charTwo[m];
  }
  console.log(finalChar);

  k++;
} while (k < number);