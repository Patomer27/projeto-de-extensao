/*
====================================
EXERCÍCIO 2 - IDADE EM DIAS
====================================

Peça ao usuário sua idade e calcule
aproximadamente quantos dias ele viveu.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite sua idade: ", (resposta) => {
    // int => idade informada pelo usuário (convertida de string para inteiro)
    let idade = parseInt(resposta);

    // int => cálculo dos dias vividos
    let diasVividos = idade * 365;

    console.log("Você já viveu aproximadamente " + diasVividos + " dias.");

    readline.close();
});