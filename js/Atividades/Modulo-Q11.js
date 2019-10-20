let c = calcular(10, 5, function(x, y) { //Utiliza uma função anônima como Callback
    return x - y; //retorna a subtração de x menos y.
});
console.log(c); // exibe o valor 5 no console

let array = [1, 2, 3, 4, 5];
let novoArray = array.map(function(x) { //Utiliza uma função anônima de callback para calcular o quadrado de cada elemento
    return x * x;
});
console.log(newArray);
// exibe [1,4,9,16,25] no console