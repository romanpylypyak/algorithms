/************************ Task # 86 ***************************** */
console.log("_________________________Task #86(bonus)________________________")
    /*Given a natural number n
    a) How many digits in number 
    b) What is the sum of its numbers
    c) Find the first digit of number
    d) Find changing sign sum of number digits(1-2+3-4..e.g)
    */

function task86(n) {
    /*1.*/
    console.log(`1) There are ${n.toString().length} digit(s) in number`)

    let arrFromNumber = n.toString().split("").map(Number)
    let arrFromNumberSum = 0
    for (let i = 0; i < arrFromNumber.length; i++) {
        arrFromNumberSum += arrFromNumber[i]
    }
    /*2.*/
    console.log(`2) Sum of digits is ${arrFromNumberSum}`)

    /*3*/
    console.log(`3) First digit of number is ${arrFromNumber[0]}`)


    /*4*/

    let signChange = arrFromNumber.reduce(function(acc, curr, ind) {
        if (ind % 2 == 0) {
            return acc + curr
        }
        if (ind % 2 != 0) {
            return acc - curr
        }
    })
    console.log(`4) Changing sign sum of number digits is ${signChange}`)
}

task86(567)



/************************Task # 87 **************************** */
console.log("_________________________Task #87______________________________")
    /*Given a natural numbers n,m. Find sum m of last digits of number n*/

function task87(n, m) {
    sum = 0;
    i = 0;

    while (i < n && i < m) {
        sum = sum + (n % 10)
        n = n / 10
        i++
    }
    console.log(`Sum of last digits is ${Math.floor(sum)}`)

}
task87(765, 2)


/************************Task # 226 **************************** */
console.log("_________________________Task #226______________________________")
    /*Given a natural numbers n,m. Find natural common multiples less than m*n */
function task226(m, n) {
    let arr = []
    for (let i = 1; i <= m * n; i++) {
        if (i % m == 0 && i % n == 0) {
            arr.push(i)
        } else continue
    }
    console.log(`Common multiples of numbers ${m} and ${n} are ${arr}`)
}

task226(30, 42)



/********************** Task # 559 ******************************** */
console.log("_________________________Task #559______________________________")
    /*Given a natural number n. Find all less than n Mersenne prime */

function mersensNumbers(n) {

    let arr = []
    nextPrime:

        for (let i = 2; i <= n; i++) { // Для всех i...
            for (let j = 2; j < i; j++) { // проверить, делится ли число..
                if (i % j == 0) {
                    continue nextPrime; // не подходит, берём следующее
                }
            }
            let k = (2 ** i - 1)
            arr.push(k)
        }

    console.log(`Mersenne primes are ${arr}`); // простое число
}

mersensNumbers(20)