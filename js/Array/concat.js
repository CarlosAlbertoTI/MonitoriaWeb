const filhas = ['ab', 'cd']
const filhos = ['ed', 'fg']

const total = filhos.concat(filhas, "eae")
console.log(total, filhos, filhas)

console.log([].concat([1, 2], [1, 4], 5))