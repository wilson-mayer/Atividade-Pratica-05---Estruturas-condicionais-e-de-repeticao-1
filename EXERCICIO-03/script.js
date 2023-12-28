// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let valorInicial = parseInt(prompt("Digite o primiro valor:"));
let valorFinal = parseInt(prompt("Digite o último valor:"));
let incremento = parseInt(prompt("Digite o incremento:"));


for (let i = valorInicial; i <= valorFinal; i += incremento) {
    document.write(i);
}

document.write(" Acabou!");