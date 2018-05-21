
function hacerAlgoPromesa (){
    return new Promise (function (resolve, reject) {        
        setTimeout(
            () => {
                console.log ( 'hacer algo que ha ocupado un tiempo...');
                let number = Math.random()
                if (number < 0.7) {
                    resolve(number) // correcto
                }  else {
                    reject(number) // incorrecto
                }
            },  2000);
    })
 }

hacerAlgoPromesa()
.then( (data) => {console.log('El resultado es', data)})
.catch( (error) => {console.log('Error', error)})
 