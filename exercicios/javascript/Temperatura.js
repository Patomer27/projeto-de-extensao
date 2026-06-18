/*
====================================
EXERCÍCIO 3 - CONVERSÃO DE TEMPERATURA
====================================

Peça uma temperatura em Celsius e
converta para Fahrenheit.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite a temperatura em Celsius: ", (resposta) => {
    // double -> temperatura em Celsius (convertida para número decimal)
    let celsius = parseFloat(resposta);

    // double -> temperatura convertida
    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log("Temperatura em Fahrenheit: " + fahrenheit);

    readline.close();
});