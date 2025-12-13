let opcao = Number(prompt(`
            Escolha uma opção
    =======================================
    [1] Salgado
    [2] Bebidas
    [3] Lanches
    [4] Sobremesas
    [5] Sair
    =======================================
    `))

function salgado() {
    alert("Salgado")
    let sacolaSalgado = Number(prompt(`
            Qual salgado deseja comprar?
            ==============================
            [1] coxinha R$ 8,00
            [2] kibe R$ 9,50
            [3] croquete 6,00
            [4] bolinha de carne 9,00
            `))
    switch (sacolaSalgado) {
        case 1:
            let unidadeCoxinha = Number(prompt("Quantas coxinhas deseja?"))

            let valorCoxinha = unidadeCoxinha * 8

            alert(`O valor total da sua compra é: R$${valorCoxinha.toFixed(2)}`)
            break;
        case 2:
            let unidadeKibe = Number(prompt("Quantos kibes deseja?"))

            let valorKibe = unidadeKibe * 9.50

            alert(`O valor total da sua compra é R$${valorKibe.toFixed(2)}`)
            break;
        case 3:
            let unidadeCroquete = Number(prompt("Quantos croquetes deseja?"))

            let valorCroquete = unidadeCroquete * 6

            alert(`O valor total da sua compra é R$${valorCroquete.toFixed(2)}`)
            break;
        case 4:
            let unidadeCarne = Number(prompt("Quantas bolinhas de carne deseja?"))

            let valorCarne = unidadeCarne * 9

            alert(`O valor total da sua compra é R$${valorCarne.toFixed(2)}`)
            break;
        default:
            alert("Opção inválida")
            salgado()
            break;
    }

}

function bebidas() {
    alert("Bebidas")
    let sacolaBebida = Number(prompt(`
            Qual bebida deseja comprar?
            ==============================
            [1] Coca-Cola
            [2] Sprite
            [3] Suco Laranja
            [4] Suco limão
            `))
}

function lanches() {
    let sacolaLanches = Number(prompt(`
            Qual lanche deseja comprar?
            ==============================
            [1] Sanduiche de presunto do Chaves
            [2] X-Tudo
            [3] Misto quente
            [4] Bauru
            `))
}
function sobremesas() {
    alert("sobremesas")
    let sacolaSalgado = Number(prompt(`
            Qual sobremesa deseja comprar?
            ==============================
            [1] Bolo de chocolate
            [2] Torta de limão
            [3] Banana Split
            [4] Brownie
            `))
}


switch (opcao) {
    case 1:
        salgado()

        break;
    case 2:
        bebidas()
        break;
    case 3:
        lanches()

        break
    case 4:
        sobremesas()
        break;
    case 5:
        alert("Saiu")
        break;
    default:
        alert("É de 1 a 5...")
        break;
}