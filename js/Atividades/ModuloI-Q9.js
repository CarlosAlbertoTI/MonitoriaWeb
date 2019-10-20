const joao = {
    nome: 'Joao',
    saudacao() {
        console.log(`Olá ${this.nome}`)
    }
}

joao.saudacao.call({ nome: "Maria" })