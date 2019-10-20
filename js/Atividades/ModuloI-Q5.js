const aluno = {
    nome: 'iago',
    notas: [
        { nome: 'fisica', valor: 5 },
        { nome: 'estatistica', valor: 4 },
        { nome: 'probabilidade', valor: 1 }
    ]
}

let resultado = aluno.notas.map((notas) => {
    return notas.valor
})
console.log(resultado)