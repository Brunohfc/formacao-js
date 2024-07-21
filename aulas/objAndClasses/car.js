class Car {

    cor;
    marca;
    litrosPorQuilomentrosGasto;

    constructor(cor, marca, litrosPorQuilomentrosGasto) {
        this.cor = cor;
        this.marca = marca;
        this.litrosPorQuilomentrosGasto = litrosPorQuilomentrosGasto;
    }

    calculoCombustivelGasto(precoCombustivel, quilometrosPercorrido) {
        let combustivelGasto = quilometrosPercorrido / this.litrosPorQuilomentrosGasto;

        let calculo = combustivelGasto * precoCombustivel;

        console.log(`O valor gasto para percorrer ${quilometrosPercorrido}km com a média de ${this.litrosPorQuilomentrosGasto}km/L é R$ ${calculo.toFixed(2)}`);
    }
}

let celta = new Car('Preto', 'Chevrolet', 12);
celta.calculoCombustivelGasto(5, 70);