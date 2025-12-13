let filmes = ["O livro de Eli", "A origem", "Avatar", "Janela secreta"]

filmes[1] = "Pixels" /* altera indice 2 */

filmes.push("internet o filme") /* add no fim */
filmes.unshift("truque de mestre") /* add no inicio */
filmes.pop() /* remove ultimo do array */
filmes.shift() /* remove o primeiro do array */
console.log(filmes[1]) 

for (const filme of filmes) {
    console.log(filme)
}

/* for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i])
} */




/* let frutas = ["Maçã", "Banana", "Abacaxi", "abacate"]

console.log (frutas[frutas.length -1]) */

