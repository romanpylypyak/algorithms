module.exports = (n) => {
    const number = Number(n);
    if ((!Number.isNaN(number))) {
        if (number > 0) {
            let arrFromNumber = number.toString().split("").map(Number)
            let arrFromNumberSum = 0
            for (let i = 0; i < arrFromNumber.length; i++) {
                arrFromNumberSum += arrFromNumber[i]
            }
            let signChange = arrFromNumber.reduce(function(acc, curr, ind) {
                if (ind % 2 == 0) return acc + curr
                if (ind % 2 != 0) return acc - curr
            })
            return `Digits in the number: ${number.toString().length}  Sum of digits is: ${arrFromNumberSum}  First digit in the number is ${arrFromNumber[0]}  Changing sign sum of number digits is ${signChange}`;
        } else return `Value less or equal to 0`
    } else return `Invalid input`
}