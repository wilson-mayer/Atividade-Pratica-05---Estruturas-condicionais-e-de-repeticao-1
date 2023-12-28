// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo (M/F):");
let compras = parseFloat(prompt("Digite o valor das compras:"));

let desconto = 0

if (sexo === "M") {
    desconto = 0.05;
} else if (sexo === "F") {
    desconto = 0.13;
} else {
    console.log("Sexo não reconhecido!");
}
 

let valorComDesconto = compras - (compras * desconto);

console.log("Bem vindo " + nome + "! o valor das suas compras com desconto é de R$ " + valorComDesconto + ".");