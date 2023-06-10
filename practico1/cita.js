let cita = "Tres tristes tigres comen trigo en un trigal";
let subtring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es :"+ " " + tamañoDeCita);
let indice = cita.indexOf(subtring);
console.log("El indice del subtring es:" + " "+ indice);
let citaRevisada = cita.slice(0,31);
console.log(citaRevisada);
