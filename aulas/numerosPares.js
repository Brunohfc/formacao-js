

function verificaNumeroPar(num) {

    //fail first
    if (!num % 2 === 0) {
        return `Número: ${num} é ímpar.`
    }

    return `Número ${num} é ímpar`

}


console.log(verificaNumeroPar(15));