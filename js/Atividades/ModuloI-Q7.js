function try_catch() {
    try {
        if (Math.random() > 0.3) {
            throw new Error()
            return
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Mensagem")
    }
}
try_catch()