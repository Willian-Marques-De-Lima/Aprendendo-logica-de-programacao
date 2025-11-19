const botao = document.querySelector("#btn")

function chamaFuncao() {
    alert("Olá")
    segundaFuncao()
}

function segundaFuncao(){
    alert("Segunda função chamada")
    terceiraFuncao()
}

function terceiraFuncao(){
    alert("Terceira função chamada")
    chamaFuncao()
}

botao.addEventListener('click', chamaFuncao)