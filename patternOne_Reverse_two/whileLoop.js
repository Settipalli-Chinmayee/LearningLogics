let totalChars = 3;
let i = totalChars;

while (i >= 0) {
    let char = "";
    let j = 1;
  while (j <= i) {
    char += "*";
    j++;
}
console.log(char);
  i--;
}
