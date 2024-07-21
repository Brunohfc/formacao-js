

class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let IMC = this.peso / (Math.pow(this.altura, 2));
        return IMC;
    }


    classificarImc() {
        let imc = this.calcularIMC();

        if (imc < 18.5) {
            return `Abaixo do peso`;
        } else if (imc >= 18.5 && imc < 25) {
            return `Peso normal`;
        } else if (imc >= 25 && imc < 30) {
            return `Esta acima do peso`;
        } else if (imc >= 30 && imc < 40) {
            console.log(`Seu peso é considerado obeso`);
        } else {
            return `Você está no quadro de  Obesidade Grave`;
        }
    }
}


let jose = new Pessoa('Jose', 70, 1.75);
console.log(jose);
console.log(`O IMC do ${jose.nome} é: ` + jose.calcularIMC().toFixed(2));
console.log(jose.classificarImc());