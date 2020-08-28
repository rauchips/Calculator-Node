const moment = require('moment')
const multiplication = require('./operations/multiplication')
const sum = require('./operations/sum')
const division = require('./operations/division')
const subtraction = require('./operations/subtraction')


const firstNum = process.argv[2]
const secondNum = process.argv[3]

const Date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
console.log('Today is: ' + Date)

sum(firstNum,secondNum)
multiplication(firstNum,secondNum)
division(firstNum,secondNum)
subtraction(firstNum,secondNum)

