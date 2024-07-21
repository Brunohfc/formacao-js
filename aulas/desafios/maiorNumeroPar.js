

let numeroImpar = 0;
let numeroPar = 0;
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
let numeros = [10, 2, 3, 40000, 777, 5, 600, 77, 99, 13,];

for (i = 0; i < numeros.length; i++) {


    if (numeros[i] % 2 === 0 || numeroPar > maiorNumeroPar) {
        numeroPar = numeros[i];
        maiorNumeroPar = numeroPar
    } else {
        numeroImpar = numeros[i];

        if (menorNumeroImpar === 0 || numeroImpar < menorNumeroImpar) {
            menorNumeroImpar = numeroImpar
        }
    }
}

console.log('O maior numero par é: ', maiorNumeroPar);
console.log('O maior numero impar é: ', menorNumeroImpar);
