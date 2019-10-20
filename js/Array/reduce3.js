Array.prototype.reduce2 = function(callback, valorInicial) {
    const valorIndice = valorInicial ? 1 : 0
    let acumulador = valorInicial || this[0]
    for (let x = valorIndice; x < this.length; x++) {
        acumulador = callback(acumulador, this[x], x, this)
    }
    return acumulador
}

let teste = [1, 2, 3]
const soma = (total, valor) => total + valor
let outroteste = teste.reduce2(soma, 10)
console.log(outroteste)