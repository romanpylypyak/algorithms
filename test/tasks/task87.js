module.exports = (n, m) => {
    const number1 = Number(n);
    const number2 = Number(m);
    if ((!Number.isNaN(number1)) || (!Number.isNaN(number2))) {
        if (number1 > 0 && number2 > 0) {
            if (!(n.toString().split("").map(Number).length <= m)) {
                sum = 0;
                i = 0;
                while (i < n && i < m) {
                    sum = sum + (n % 10)
                    n = n / 10
                    i++
                }
                return `Sum of last digits is ${Math.floor(sum)}`
            } else return `Error! Count of digits n must be more than m`
        } else return `Error! n or m <=0`
    } else return `n or m must be int`
}