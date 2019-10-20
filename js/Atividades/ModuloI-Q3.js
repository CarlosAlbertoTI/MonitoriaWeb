let array = [5, 6, 10, 4, 3, 7, 1]
let media = (array.reduce((sumArray, index) => sumArray += index)) / array.length
let resultado = array.filter((index) => index > media)

console.log(resultado)