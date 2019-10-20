const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo
let total1 = 0
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota;
}
console.log(total1 / alunos.length)

//Declaratvo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)