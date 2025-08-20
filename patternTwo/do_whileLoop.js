let maxChar = 3;
let i = 0;
let char = "";
let j = 1;
// do {
//     char+="*"
//     i++
//     console.log(char)
//     char+="*"
// } while (i < maxChar);

do {
  char += "*";
  do {
    console.log(char);
    char += "*";
    j++;
  } while (j < i);
  i++;
} while (i < maxChar);
