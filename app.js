const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(14,9))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };