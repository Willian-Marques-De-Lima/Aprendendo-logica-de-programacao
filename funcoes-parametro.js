const btnSoma = document.querySelector("#somar")
const btnSubtrai = document.querySelector("#subtrair")
const btnMultiplica = document.querySelector("#multiplicar")
const btnDivide = document.querySelector("#dividir")
const inputPrimeiroValor = document.querySelector("#primeiroNumero")
const inputSegundoValor = document.querySelector("#segundoNumero")
const divRes = document.querySelector(".res")


function somar() {
    let resultado = Number(inputPrimeiroValor.value) + Number(inputSegundoValor.value)
    divRes.innerText = resultado
}

function subtrair(){
    let resultado = Number(inputPrimeiroValor.value) - Number(inputSegundoValor.value)
    divRes.innerText = resultado
}

function multiplicar(){
    let resultado = Number(inputPrimeiroValor.value) * Number(inputSegundoValor.value)
    divRes.innerText = resultado
}

function dividir (){
    let resultado = Number(inputPrimeiroValor.value) / Number(inputSegundoValor.value)
    divRes.innerText = resultado
}

btnSoma.addEventListener('click', somar)

btnSubtrai.addEventListener('click', subtrair)

btnMultiplica.addEventListener('click', multiplicar)

btnDivide.addEventListener('click', dividir)

/*const botaoSoma = document.querySelector("#botaoSoma")
const botaoSubtrai = document.querySelector("#botaoSubtrai")
const botaoMultiplica = document.querySelector("#botaoMultiplica")
const botaoDivide = document.querySelector("#botaoDivide")*/

/*let a = Number(prompt("Digite um número"))

let b = Number(prompt("Digite outro número"))

function soma(a, b){
    return a + b
}*/

/*function somar(){
    let a = Number(prompt("Digita ai"))
    let b = Number(prompt("Digita ai"))

    let soma = a + b

    alert(soma)
}

function subtrair(){
    let a = Number(prompt("Digita ai"))
    let b = Number(prompt("Digita ai"))

    let subtracao = a - b

    alert(subtracao)
}




function multiplicar(){
    let a = Number(prompt("Digita ai"))
    let b = Number(prompt("Digita ai"))

    let multiplicacao = a * b

    alert(multiplicacao)
}



function dividir(){
    let a = Number(prompt("Digita ai"))
    let b = Number(prompt("Digita ai"))

    let divisao = a / b

    alert(divisao)
}


botaoSoma.addEventListener('click', somar)
botaoSubtrai.addEventListener('click', subtrair)
botaoMultiplica.addEventListener('click', multiplicar)
botaoDivide.addEventListener('click', dividir)*/


/*console.log(soma(a, b))*/
/*let somaValores = soma(5, 3)*/

/*console.log(soma(5, 3))
console.log(soma(10, 3))
console.log(soma(5, 23))
console.log(soma(53, 23))*/