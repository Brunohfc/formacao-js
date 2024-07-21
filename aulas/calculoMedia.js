

function media(nota1, nota2, nota3) {

    let calculoMedia = (nota1 + nota2 + nota3) / 3;

    return calculoMedia;
}

let notaMedia = media(7, 7, 7);

if (notaMedia < 5) {
    console.log(`Sua média é ${notaMedia.toFixed(2)} e está reprovado`);
} else if (notaMedia >= 5 && notaMedia < 7) {
    console.log(`Sua média é ${notaMedia.toFixed(2)} e está de recuperação`);
} else {
    console.log(`Sua média é ${notaMedia.toFixed(2)} e está aprovado. Parabéns!`);
}