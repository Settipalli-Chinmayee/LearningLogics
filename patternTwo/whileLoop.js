let totalChars = 3;
let i = 0;
let char = "";
let j = 1;
while ((2*i)-1 <= totalChars) {
  char += "*";
  while (j <= i) {
      char += "*";
      j++;
    }
    console.log(char);
    i++;
}
