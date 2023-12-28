// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let homensSalario = 0;
let mulheresSalario = 0;
let continuar = true;

while (continuar) {
    let salario = parseFloat(prompt("Digite o salário do funcionario:"));
    let sexo = prompt("Digite o Sexo do funcionário (Masculino/Feminino:");

    if (sexo === "Masculino") {
        homensSalario += salario;
    } else if (sexo === "Feminino") {
        mulheresSalario += salario;
    }

    continuar = confirm("Deseja continuar?");

}

document.write(`O total de salários pagos aos homens é R$ ${homensSalario.toFixed(2)} e o total pago às mulheres é R$ ${mulheresSalario.toFixed(2)}`);