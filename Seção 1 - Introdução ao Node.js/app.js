const { sum, subtraction, multiplication, division } = require('./calculator')
const calculator = require('./calculator')

let showSite = false

const site = 'https://guiadoprogramador.com'

console.log("Hello world in Node.js")
console.log('Meu nome é Mich')
console.log('Estou aprendendo Node.js com Guia do Programador')

if (!showSite) console.log(site)

let resultMultiplication = multiplication(10, 10)
let resultSubtraction = subtraction(20, 40)

console.log(sum(10, 20))
console.log(division(10, 2))
console.log(resultMultiplication)
console.log(resultSubtraction)

console.log(calculator.name)
calculator.name = 'Minha calculadora importada'
console.log(calculator.name)
