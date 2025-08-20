let number = 3;

let char = "*";
let i = number;
let k = 0;

while (i > 0 && i <= number) {
  // console.log(char);
  char += "*";
  i--;
}
// console.log(char.length);
let charArr = char.split("");
while (k < number) {
  charArr.pop();
//   console.log(charArr);
  let stringChar=""
  for (let j = 0; j < charArr.length; j++) {
    stringChar +=charArr[j]
}
console.log(stringChar)
  k++;
}