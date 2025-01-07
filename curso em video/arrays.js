//tradicional
let num = [1, 2, 3, 6, 5, 4, 8, 9, 7, 3]
for (let posicao = 0; posicao < num.length; posicao++) {
    console.log(`A posição ${posicao} tem valor de ${num[posicao]}`)
}
// simpificado
for (const pos in num) {
    console.log(num[pos]+' no modo simplificado')
}