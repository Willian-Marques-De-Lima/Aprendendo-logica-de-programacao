const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")
function trocaTexto(){
    titulo.innerText = "Rafael"
}
botao.addEventListener("click", trocaTexto)