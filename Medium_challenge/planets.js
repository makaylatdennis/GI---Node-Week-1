const fs = require('fs') 
const file = 'planets.txt'

fs.readFile(file, function(err, data){

    if(err){
        return console.error('Error Occurred'); 
      }

      const lines = data.toString().split(",")
      for(let i = 0; i < lines.length; i++){
        console.log(lines[i])
      }

})