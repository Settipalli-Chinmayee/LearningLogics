

let charLength = 3

for(let i= charLength; i >= 0; i--){
    let char = ''
    for(j=1; j<=i; j++){
        char+="*"
    }
    console.log(char)
}