module.exports = (n, m) => {
    const number1 = Number(n);
    const number2 = Number(m);
    if ((!Number.isNaN(number1)) || (!Number.isNaN(number2))) {
        if ((number1 > 0) && (number2 > 0)) {
            let arr = []
            for (let i = 1; i <= m * n; i++) {
                if (i % m == 0 && i % n == 0) {
                    arr.push(i)
                } else continue
            }
            return `Common multiples of numbers ${n} and ${m} are ${arr}`
        } else return `Error! n or m <=0`
    } else return `n or m must be int`
}