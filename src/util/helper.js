const printDate = function(){
    const a = new Date()
    console.log("Today's date is "+ a.getDate())
}
const printMonth = function(){
    const b = new Date()
    console.log("This month is "+ b.getMonth())
}
const getBatchInfo = function(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system")
}


module.exports.date = printDate
module.exports.month = printMonth
module.exports.batchInfo = getBatchInfo