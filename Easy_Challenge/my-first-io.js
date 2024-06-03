const fs = require('fs') 
const str = fs.readFileSync(process.argv[2]).toString()
let counter=0

str.split('').forEach(element=>{
    if (element=='\n'){
        counter++
    }
})
console.log(counter)