module.exports = function toReadable (n) {
    let ingLate = ["zero", "one", "two", "three", "four", "five", "six",
    "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let tens = [ "twenty", "thirty", "forty", "fifty", "sixty",
    "seventy", "eighty", "ninety"]

    return n < 20 ? ingLate[n] :
    n.toString()
    .split('')[1] == 0 && n.toString().length == 2 ? 
    tens[n.toString().split('')[0]-2] : 
    n.toString()
    .split('')[1] != 0 && n.toString().length == 2 ?
    tens[n.toString().split('')[0]-2] + " " 
    + ingLate[n.toString().split('')[1]] :
    n.toString().split('')[1] == 0 &&
    n.toString().split('')[2] == 0 &&
    n.toString().length == 3 ? 
    ingLate[n.toString().split('')[0]] +
    " hundred" :
    n.toString().split('')[1] < 2 &&
    n.toString().length == 3 ? 
    ingLate[n.toString().split('')[0]] +
    " hundred " + (n.toString().slice(1) < 10 ? 
    ingLate[n.toString().split('')[2]] :
    ingLate[n.toString().slice(1)]) :
    n.toString().split('')[1] > 1 &&
    n.toString().length == 3 &&
    n.toString().split('')[2] != 0 ? 
    ingLate[n.toString().split('')[0]] +
    " hundred "  + 
    tens[n.toString().split('')[1]-2] +
    " " + ingLate[n.toString().split('')[2]] :
    ingLate[n.toString().split('')[0]] +
    " hundred " + 
    tens[n.toString().split('')[1]-2]  

}


