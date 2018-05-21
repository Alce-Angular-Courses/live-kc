class Libro {
    constructor(autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

    mostrar() {
        console.log(this)
    }
}

class LibroTec extends Libro {
    constructor(autor, titulo, categotia='Informatica') {
        super(autor, titulo)
        this.categoria = categotia
    }
}

let libro1 = new LibroTec("J.Perez", "Aprende Angular")

libro1.editorial = "Ra-ma"
libro1.mostrar()