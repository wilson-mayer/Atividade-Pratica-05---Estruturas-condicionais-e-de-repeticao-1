// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idade = 0;
let somaIdades = 0;
let numeroAlunos = 0;

while (idade !== 999) {
    let idade = parseInt(prompt("Digite a idade do aluno:"));
    if (idade === 999) {
        break;
    }

    if (idade !== 999) {
        somaIdades += idade;
        numeroAlunos++;
    } else {
        alert('Digite uma idade válida!')
    }

}

let mediaIdades = somaIdades / numeroAlunos;

document.write(`Existem ${numeroAlunos} alunos na turma`);
document.write(`A médida de idade é ${mediaIdades.toFixed(2)}`);