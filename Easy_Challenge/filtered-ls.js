
const fs = require('fs') 
const path = require('path')

const folder = process.argv[2]
const ext = '.'+ process.argv[3]
fs.readdir(folder, function (err, list) {

    if(err){
        console.error(err)
    }
for(let i = 0; i < list.length; i++){
    if (path.extname(list[i])=== ext){
console.log(list[i])
    }
}
    
 })


 //path.extname(file)