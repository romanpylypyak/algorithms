const typewriter = require('node-typewriter');
const colors = require('colors');

module.exports = {
    task86a: function task86a(inq) {
        return new Promise(function(resolve) {
            inq
                .prompt({
                    type: 'input',
                    name: 'value',
                    message: 'Roman Pylypyak: Task 86a\n> Given a natural number n.'
                        .green +
                        '\n>  a) How many digits in number '
                        .green +
                        '\n>  b) What is the sum of its numbers '
                        .green +
                        '\n>  c) Find the first digit of number '
                        .green +
                        '\n>  d) Find changing sign sum of number digits(1-2+3-4..e.g) '
                        .green +
                        '\n? Please type a number in console >>>'.yellow

                })
                .then(({ value }) => {
                    if (value === 'back' || value === 'exit') {
                        resolve(value);
                    } else {
                        const number = Number(value);
                        if (!Number.isNaN(number)) {
                            if (number > 0) {
                                console.log(`1) There are ${number.toString().length} digit(s) in number`.black.bgGreen)
                                let arrFromNumber = number.toString().split("").map(Number)
                                let arrFromNumberSum = 0
                                for (let i = 0; i < arrFromNumber.length; i++) {
                                    arrFromNumberSum += arrFromNumber[i]
                                }
                                console.log(`2) Sum of digits is ${arrFromNumberSum}`.black.bgGreen)
                                console.log(`3) First digit of number is ${arrFromNumber[0]}`.black.bgGreen)
                                let signChange = arrFromNumber.reduce(function(acc, curr, ind) {
                                    if (ind % 2 == 0) {
                                        return acc + curr
                                    }
                                    if (ind % 2 != 0) {
                                        return acc - curr
                                    }
                                })
                                console.log(`4) Changing sign sum of number digits is ${signChange}`.black.bgGreen)
                                setTimeout(() => {
                                    resolve('back');
                                }, 5000);
                            }
                        } else {
                            console.log(
                                'Please try again and type correct value'.red +
                                '\nP.S. You can type exit to finish the whole program'.green +
                                '\nOr you can type back to return on tasks menu\n\n'.green
                            );
                            setTimeout(() => {
                                resolve(task86a(inq));
                            }, 2000);
                        }
                    }
                });
        });
    },
    task87: function task87(inq) {
        return new Promise(function(resolve) {
            inq
                .prompt({
                    type: 'input',
                    name: 'value',
                    message: 'Roman Pylypyak: Task 87\n> Given a natural numbers n,m. Find sum m of last digits of number n'
                        .green +
                        '\n? Please type a number 1 and number 2 divided by "," or space >>>'.yellow
                        // +
                        // '\n? Please type a number 2 greater than 0 in my console >>>'.yellow
                })

            .then(({ value }) => {
                if (value === 'back' || value === 'exit') {
                    resolve(value);
                } else {
                    let str1 = ""
                    let str2 = ""
                    let len = value.length
                    if (value.includes(",")) {
                        let ind = value.indexOf(",")
                        str1 = value.substring(0, ind)
                        str2 = value.substring(ind + 1, len)
                    } else if (value.includes(" ")) {
                        let ind2 = value.indexOf(" ")
                        str1 = value.substring(0, ind2)
                        str2 = value.substring(ind2 + 1, len)
                    }
                    let n = Number(str1);
                    let m = Number(str2);
                    if ((!Number.isNaN(n) && !Number.isNaN(m)) && (n > 0 && m > 0)) {
                        sum = 0;
                        i = 0;

                        while (i < n && i < m) {
                            sum = sum + (n % 10)
                            n = n / 10
                            i++
                        }
                        console.log(`Sum of last digits is ${Math.floor(sum)}`.black.bgGreen)
                        setTimeout(() => {
                            resolve('back');
                        }, 2000);

                    } else {
                        console.log(
                            'Please try again and type correct value'.red +
                            '\nP.S. You can type exit to finish the whole program'.green +
                            '\nOr you can type back to return on tasks menu\n\n'.green
                        );
                        setTimeout(() => {
                            resolve(task87(inq));
                        }, 2000);
                    }
                }
            });
        });
    },
    task226: function task226(inq) {
        return new Promise(function(resolve) {
            inq
                .prompt({
                    type: 'input',
                    name: 'value',
                    message: 'Roman Pylypyak: Task 226\n> Given a natural numbers n,m. Find natural common multiples less than m*n'
                        .green +
                        '\n? Please type a number 1 and number 2 divided by "," or space >>>'
                        .yellow
                })
                .then(({ value }) => {
                    if (value === 'back' || value === 'exit') {
                        resolve(value);
                    } else {
                        let str1 = ""
                        let str2 = ""
                        let len = value.length
                        if (value.includes(",")) {
                            let ind = value.indexOf(",")
                            str1 = value.substring(0, ind)
                            str2 = value.substring(ind + 1, len)
                        } else if (value.includes(" ")) {
                            let ind2 = value.indexOf(" ")
                            str1 = value.substring(0, ind2)
                            str2 = value.substring(ind2 + 1, len)
                        }
                        let n = Number(str1);
                        let m = Number(str2);
                        if ((!Number.isNaN(n) && !Number.isNaN(m)) && (n > 0 && m > 0)) {
                            let arr = []
                            for (let i = 1; i <= m * n; i++) {
                                if (i % m == 0 && i % n == 0) {
                                    arr.push(i)
                                } else continue
                            }
                            console.log(`Common multiples of numbers ${m} and ${n} are ${arr}`.black.bgGreen)
                            setTimeout(() => {
                                resolve('back');
                            }, 2000);

                        } else {
                            console.log(
                                'Please try again and type correct value'.red +
                                '\nP.S. You can type exit to finish the whole program'.green +
                                '\nOr you can type back to return on tasks menu\n\n'.green
                            );
                            setTimeout(() => {
                                resolve(task226(inq));
                            }, 2000);
                        }
                    }
                });
        });
    },
    task559: function task559(inq) {
        return new Promise(function(resolve) {
            inq
                .prompt({
                    type: 'input',
                    name: 'value',
                    message: 'Nimchuk Roman: Task 243b\n> Given a natural number n. Find all less than n Mersenne prime'
                        .green +
                        '\n? Please type a number in console >>>'.yellow
                })
                .then(({ value }) => {
                    if (value === 'back' || value === 'exit') {
                        resolve(value);
                    } else {
                        const n = Number(value);
                        if (!Number.isNaN(n)) {
                            if (n > 0) {
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

                                console.log(`Mersenne primes are ${arr}`.black.bgGreen);
                                setTimeout(() => {
                                    resolve('back');
                                }, 5000);
                            }
                        } else {
                            console.log(
                                'Please try again and type correct value'.red +
                                '\nP.S. You can type exit to finish the whole program'.green +
                                '\nOr you can type back to return on tasks menu\n\n'.green
                            );
                            setTimeout(() => {
                                resolve(task559(inq));
                            }, 2000);
                        }
                    }
                });
        });
    }
};