let maxChars = 3;

for (let i = 1; i <= maxChars; i++) {
  let char = "";

  for (let j = 1; j <= 2 * i - 1; j++) {
    char += "*";
    console.log(char);
  }
}
