const mocha = require('mocha');
const chai = require('chai');
const colors = require('colors');

const task86 = require('./tasks/task86');
const task87 = require('./tasks/task87');
const task226 = require('./tasks/task226');
const task559 = require('./tasks/task559');

const expect = chai.expect;

describe(`Roman Pylypyak:`.green, () => {
    it(`Task 86\n`.cyan +
        `Given a natural number n
        a) How many digits in number 
        b) What is the sum of its numbers
        c) Find the first digit of number
        d) Find changing sign sum of number digits(1-2+3-4..e.g)`.brightWhite, () => {
            let str11 = task86('445');
            let str12 = task86('866');
            let str13 = task86('22');
            let str14 = task86('-2');
            let str15 = task86('0');
            let str16 = task86('chikibriki');

            expect(str11).to.equal('Digits in the number: 3  Sum of digits is: 13  First digit in the number is 4  Changing sign sum of number digits is 5');
            expect(str12).to.equal('Digits in the number: 3  Sum of digits is: 20  First digit in the number is 8  Changing sign sum of number digits is 8')
            expect(str13).to.equal('Digits in the number: 2  Sum of digits is: 4  First digit in the number is 2  Changing sign sum of number digits is 0')
            expect(str14).to.equal('Value less or equal to 0')
            expect(str15).to.equal('Value less or equal to 0')
            expect(str16).to.equal('Invalid input')
        });
    it(`Task 87\n`.cyan +
        `Given a natural numbers n,m. Find sum m of last digits of number n`.brightWhite, () => {
            let str21 = task87('155', '2');
            let str22 = task87('122', '1');
            let str23 = task87('177', '3');
            let str24 = task87('-122', '2');
            let str25 = task87('0');
            let str26 = task87('chikibriki');

            expect(str21).to.equal('Sum of last digits is 10');
            expect(str22).to.equal('Sum of last digits is 2')
            expect(str23).to.equal('Error! Count of digits n must be more than m')
            expect(str24).to.equal(`Error! n or m <=0`)
            expect(str25).to.equal(`Error! n or m <=0`)
            expect(str26).to.equal(`n or m must be int`)
        });
    it(`Task 226\n`.cyan +
        `Given a natural numbers n,m. Find natural common multiples less than m*n`.brightWhite, () => {
            let str31 = task226('11', '22');
            let str32 = task226('5', '12');
            let str33 = task226('24', '44');
            let str34 = task226('-42', '2');
            let str35 = task226('0');
            let str36 = task226('chikibriki');

            expect(str31).to.equal('Common multiples of numbers 11 and 22 are 22,44,66,88,110,132,154,176,198,220,242');
            expect(str32).to.equal('Common multiples of numbers 5 and 12 are 60')
            expect(str33).to.equal('Common multiples of numbers 24 and 44 are 264,528,792,1056')
            expect(str34).to.equal(`Error! n or m <=0`)
            expect(str35).to.equal(`Error! n or m <=0`)
            expect(str36).to.equal(`n or m must be int`)
        });
    it(`Task 559\n`.cyan +
        `Given a natural number n. Find all less than n Mersenne prime`.brightWhite, () => {
            let str41 = task559('20');
            let str42 = task559('12');
            let str43 = task559('-42');
            let str44 = task559('0');
            let str45 = task559('chikibriki');

            expect(str41).to.equal('Mersenne primes are 3,7,31,127,2047,8191,131071,524287');
            expect(str42).to.equal('Mersenne primes are 3,7,31,127,2047')
            expect(str43).to.equal(`Error! n <=0`)
            expect(str44).to.equal(`Error! n <=0`)
            expect(str45).to.equal(`n must be int`)
        });
});
