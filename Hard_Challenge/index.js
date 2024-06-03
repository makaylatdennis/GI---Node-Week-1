const express = require('express')
const app = express()
const fs = require('fs') 





app.get('/', (req, res) => {
    fs.readFile('employees.json', function (err, data){

        if(err){
          return console.error('Error Occurred');
            
        }
               res.send(data.toString())
    
    });



});
app.get('/:employeeId', (req, res) => {
    var employee;
    fs.readFile('employees.json', function (err, data){


        if(err){
          return console.error('Error Occurred');
            
        }
       const arr = JSON.parse(data) 
for(let i=0; i < arr.length; i++){
   
    if(arr[i].employeeID == req.params.employeeId){
        employee = arr[i]
    }
} 
if(employee){
    res.send(employee)
}else{
    res.status(404).send('Employee was not found.')

}

    });

});

app.listen(3000, () => console.log('Listening on port 3000...'))
