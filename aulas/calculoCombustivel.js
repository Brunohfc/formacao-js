

let precoCombustivel= 5.0;
let kmL = 10;
let distViagem = 200;

let kmLDivididoDistViagem = distViagem / kmL;

let resultado = kmLDivididoDistViagem * precoCombustivel;

console.log(`O gasto para fazer a viagem com distância de ${distViagem}km e o preço do combustível a R$ ${precoCombustivel} é: R$${resultado}`);
