// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distancia = parseFloat(prompt("Insira a distância desejada em km:"));
let = preco = 0;

if (distancia <= 200) {
    preco = distancia * 0.5;
} else {
    preco = distancia * 0.45;
}

console.log(`O valor da passagem é de R$ ${preco.toFixed(2)}`);