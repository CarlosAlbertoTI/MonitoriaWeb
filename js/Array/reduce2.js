const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1

let valor1 = (alunos.map(aluno => aluno.bolsista)).reduce((final, atual) => final && atual)
console.log(valor1)

//Desafio 2 
let valor2 = (alunos.map(aluno => aluno.bolsista)).reduce(((final, atual) => final || atual))
console.log(valor2)