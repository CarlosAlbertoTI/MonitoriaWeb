const fisica = {
    nome: 'Fisica',
    alunos: ['Iago', 'João'],
    localizacao: {
        bloco: 3,
        sala: 4
    }
}

let { localizacao: { sala: sala } } = fisica
console.log(sala)