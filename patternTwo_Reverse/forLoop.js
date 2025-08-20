let maxChar = 3

for(let i=maxChar; i>=1; i--){
    let char = ''
    for(let j=1; j<=2*i-1; j++){
        char+="*"
    }
    console.log("charcter pattern",char)
}