const aDatos = [{precio: 12},{precio: 32},{precio: 56}]
aDatos.push({precio: 68})
calcularPrecio(12)
calcularPrecio()

function calcularPrecio(iva = 22) {
    {
        let finalIva = 1 + (iva/100)
        console.log(finalIva)
        let precioFinal
        aDatos.forEach(  elem => {
            precioFinal = elem.precio * finalIva
            mostrarPrecio ( precioFinal)
        })
    }

    function mostrarPrecio (precioFinal) {
        console.log(
            `
            El precio final es:
            ${precioFinal.toFixed(2)}`
        )
     }
     

}