function  printDate(){

console.log(' Today Date is " 1st June 2022" ');

}

function printMonth() {

console.log(' Months is " June" "5th months of 2022" ');

}
 
 function  getBatchInfo(){

    console.log(" Radon ,W3D2 ,Today Topic is Intro of 'NodeJS' ");


    // prints batch name, week#, Day#, the topic being taught today is ….. 
    // For example - Roadon, W3D1, the topic for today is Nodejs module system’
 }


 module.exports.Date=printDate()
 module.exports.Month=printMonth()
 module.exports.Info = getBatchInfo()