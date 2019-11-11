module.exports = (n) => {
    const number = Number(n);
    if ((!Number.isNaN(number))) {
        if (number > 0) {
            let arr = []
            nextPrime:

                for (let i = 2; i <= n; i++) {
                    for (let k = 2; k < i; k++) {
                        if (i % k == 0) {
                            continue nextPrime;
                        }
                    }
                    let x = (2 ** i - 1)
                    arr.push(x)
                }
            return `Mersenne primes are ${arr}`
        } else return `Error! n <=0`
    } else return `n must be int`
}