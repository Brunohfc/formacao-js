
//calculando IMC
function IMC(peso, altura) {

    let converteCentimetrosParaMetros = altura / 100;

    let calculoIMC = peso / Math.pow(converteCentimetrosParaMetros, 2);

    return calculoIMC;
}

let resultadOIMC = IMC(77, 171);

dadoFormatado = resultadOIMC.toFixed(2)

if (resultadOIMC < 18.5) {
    console.log(`Seu IMC ${dadoFormatado} é abaixo do peso`);
} else if (resultadOIMC >= 18.5 && resultadOIMC < 25) {
    console.log(`Seu IMC ${dadoFormatado} esta normal`);
} else if (resultadOIMC >= 25 && resultadOIMC < 30) {
    console.log(`Seu IMC ${dadoFormatado} esta acima do peso`);
} else if (resultadOIMC >= 30 && resultadOIMC < 40) {
    console.log(`Seu IMC ${dadoFormatado} é obeso`);
} else {
    console.log(`Seu IMC ${dadoFormatado} é Obesidade Grave`);
}