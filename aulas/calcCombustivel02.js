/*

Calcular o valor de uma viagem 

ter 5 variavies
    1- preço etanol
    2- preço gasolina
    3- tipo de combustivel
    4- gasto médio combustivel
    5- distancia em KM da viagem

*/


let precoGasolina = 6.00;
let precoAlcool = 4.00;
let tipoCombustivel = "E";
let kmPorLitros = 10;
let distViagem = 100;

function calCombustivelGastos(x) {
    let litrosGastos = distViagem / kmPorLitros;

    return litrosGastos * x;
}

if (tipoCombustivel === "G") {

    let result = calCombustivelGastos(precoGasolina);

    console.log(`O valor gasto para viajar ${distViagem}km fazendo em média ${kmPorLitros}km/L com Gasolina é R$${result.toFixed(2)}`);
} else {
    let result = calCombustivelGastos(precoAlcool);

    console.log(`O valor gasto para viajar ${distViagem}km fazendo em média ${kmPorLitros}km/L com Alcool é R$${result.toFixed(2)}`);
}



//console.log(`O gasto para fazer a viagem com distância de ${distViagem}km e o preço do combustível a R$ ${precoCombustivel} é: R$${resultado}`);
