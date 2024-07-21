

function mediaAluno(nota) {

    if (nota < 5) {
        return 'Reprovado';
    } else if (nota >= 5 && nota < 7) {
        return 'Recuperação';
    } else {
        return 'Aprovado';
    }
}


console.log(mediaAluno(7));