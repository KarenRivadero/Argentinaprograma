let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
for (let i = 0; i < personas.length; i++) { 
    if (personas[i] === "Sofia" || personas[i] === "Jose"){
        rechazados.push(personas[i]);
    }
    
    else {
        admitidos.push(personas[i]);
    }
}
console.log(rechazados);
console.log(admitidos);


console.log("La lista de invitados admitidos es: ")
for (let i = 0; i < admitidos.length ; i++) {
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es: ")

for (let i = 0; i < rechazados.length ; i++) {
    console.log(rechazados[i]);
}


console.log("La lista ordenada de invitados admitidos es:")
for (let i = 0; i < admitidos.length ; i++) {
    admitidos.sort((a,b) => {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    })
    console.log(admitidos[i]);
}



console.log("La lista ordenada de invitados rechazados es: ")
for (let i = 0; i < rechazados.length ; i++) {
    rechazados.sort((a,b) => {
        if (a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    })
    console.log(rechazados[i]);
}
