let maxChar = 3;
let i = maxChar;
do {
  let char = "";
  let j = 1;

  do {
    char += "*";
    j++;
  } while (j <= i);
  console.log(char);

  i--;
} while (i > 0);
