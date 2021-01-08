function sumar(num) {
    console.log(num)
}

sumar(10)

//Funciones flecha 

const sumarDos = (num) => {
    console.log(num)
}

sumarDos(20)

const sumarDos2 = num => {
    console.log(num)
}

sumarDos2(20)

const sumarDosParametros = (num1, num2) => {
    console.log(num1 + num2)
}

sumarDosParametros(20, 10)

//Funcion de flecha explicita
const sumarDosParametrosRet = (num1, num2) => {
    return num1 + num2
}

const resultado = sumarDosParametrosRet(20, 10)
console.log(resultado)

//Función de flecha simplificada 
const sumarDosParametrosRetSimp = (num1, num2) => (num1 + num2)
const resultadoS = sumarDosParametrosRetSimp(20, 10)
console.log(resultadoS)

//Ejemplo 
const mensaje = () => 'hola soy Rebe'

const resultadoMensaje = mensaje()
console.log(resultadoMensaje)

//Cuando el parametro se envie vacio se toma el valor de uno sumaTres()
// de lo contrario se toma el valor enviado sumaTres(5)
const sumaTres = (num = 1) => {
    console.log(num + 3)
}

sumaTres()