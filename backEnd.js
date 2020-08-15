const fs = require('fs'); 
const csv = require('csv-parser');
fixed_cost = [];
status = [];
priority = [];
deadline = [];
actual_hrs = [];

var fixCost = 0;
var actualCost = 0;

fs.createReadStream('Project.csv')
.pipe(csv())
.on('data', function(data){
    try {
        status.push(data['STATUS']);
        priority.push(data['PRIORITY']);
        deadline.push(data['DEADLINE']);
        fixed_cost.push(data['FIXED COST']);
        actual_hrs.push(data['ACTUAL HRS']);    
        actualCost+=parseInt(data['ACTUAL HRS']);     
        fixCost+=Number(data['FIXED COST'].replace(/[^0-9.-]+/g,""));
        
    }
    catch(err) {
        //code for error handling 
    }
})
.on('end',function(){
   
    console.table( {  
        "Status" : status,
        "Priority " : priority,
        "Deadline":deadline,
        "Fixed Cost":fixed_cost,
        "Actual Hours" : actual_hrs});
        console.log("Total Fixed Cost : $"+fixCost);
        console.log("Sum of Actual Hours : "+actualCost+" Hours");    
   
});  