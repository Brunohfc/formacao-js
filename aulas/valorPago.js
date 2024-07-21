

let precoProduto = 100;
let pagamentoDebito = "D";
let pagamentoCredito = "C";
let qtdeParcelas = 3;
let pagamentoPixOuDinheiro = true;
let pagamentoAVista = true;

let descontoDebito = 10;
let descontoDinheiroOuPix = 15;
let jurosQtdeParcelasAcimaDeDuasVezes = 10;

let jurosAcimaDeDuasVezesParcelado = 10;


//AQUI QUE EU ALTERO
tipoPagamento = pagamentoCredito



if (tipoPagamento === pagamentoDebito) {

    let calculoDesconto = (precoProduto * descontoDebito) / 100;
    let resultado = precoProduto - calculoDesconto;

    console.log(`O valor do produto sem desconto é R$ ${precoProduto}, mas pagando no débito você ganhou ${descontoDebito}% de desconto e o preço ajustado é: R$ ${resultado.toFixed(2)}`);

} else if (tipoPagamento === pagamentoPixOuDinheiro) {
    let calculoDesconto = (precoProduto * descontoDinheiroOuPix) / 100;
    let resultado = precoProduto - calculoDesconto;

    console.log(`O valor do produto sem desconto é R$ ${precoProduto}, mas pagando no Pix ou dinheiro você ganhou ${descontoDinheiroOuPix}% de desconto e o preço ajustado é: R$ ${resultado.toFixed(2)}`);

} else if (tipoPagamento === pagamentoCredito && qtdeParcelas <= 2) {
    console.log(`Parcelando em até 2 vezes o preço do produto permanece em R$${precoProduto.toFixed(2)}`);
} else {
    let calculoJuros = (precoProduto * jurosAcimaDeDuasVezesParcelado) / 100;
    let resultado = precoProduto + calculoJuros;

    console.log(`Parcelando acima de 2 vezes o preço do produto foram acrescidos R$${calculoJuros} ao preço do produto, totalizando em R$ ${resultado}`);

}
