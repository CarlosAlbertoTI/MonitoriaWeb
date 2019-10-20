const obj = {
    temp: 0,
    get temperatura() {
        return this.temp;
    },
    set temperatura(i) {
        if (i > 0) {
            this.temp = i
        }

    }
}

console.log(obj.temperatura)
obj.temperatura = 2
console.log(obj.temperatura)