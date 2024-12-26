// creating modules
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

//  exporting methods of modules to main files
module.exports = { add, sub }
// exports.mul = (a,b) => a*b