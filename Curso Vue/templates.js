const numero = (num) => {
    return 'El número es: ' + num
}

const resultado = numero(10)
console.log(resultado)

//template string --> `${}`
const numeroTemplate = (num1, num2) => {
    return `el numero es ${num1 + num2}`
}

const resultadoTemp = numeroTemplate(10, 20)
console.log(resultadoTemp)