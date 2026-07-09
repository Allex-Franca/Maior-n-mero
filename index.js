const prompt = require('prompt-sync')();

function encontrarMaior(N1, N2, N3) {
    let maior = N1;
    if (N2 > maior) {
        maior = N2;
    }
    if (N3 > maior) {
        maior = N3;
    }
    return maior;
}
let N1 = Number(prompt("Digite o Valor de N1: "));
let N2 = Number(prompt("Digite o Valor de N2: "));
let N3 = Number(prompt("Digite o Valor de N3: "));
console.log("Maior:", encontrarMaior(N1, N2, N3));