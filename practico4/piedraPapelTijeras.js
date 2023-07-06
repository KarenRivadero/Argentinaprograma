function obtenerJugadaUsuario(){
    const readlineSync = require('readline-sync');
    const  jugada = readlineSync.question("Ingrese su jugada: " );
    }
    
obtenerJugadaUsuario()


function numeroAleatorio(max) {
return Math.floor(Math.random() * max);
}
numeroAleatorio(3)

function obtenerJugadaComputadora() {

    if (numeroAleatorio(3) === 0) {
        console.log("Piedra");
    }
    else if (numeroAleatorio(3) === 1) {
        console.log("Papel");
    }
    else {
        console.log("Tijeras");
    }
}

obtenerJugadaComputadora()


