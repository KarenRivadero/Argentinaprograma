const readlineSync = require('readline-sync');
const mes = readlineSync.question('Ingrese un mes: ');
let mesElegir =  {1:'enero', 2:'febrero', 3:'marzo', 4:'abril', 5:'mayo', 6:'junio', 7:'julio', 8:'agosto', 9:'septiembre', 10:'octubre', 11:'noviembre', 12:'diciembre'};
let meses = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:31, 12:31};
if (mes==1) {
    console.log('La cantidad de dias del mes ' + mesElegir[1] + ' es: ' + meses[1]);
}
else if (mes == 2) {
    console.log('La cantidad de dias del mes ' + mesElegir[2] + ' es: ' + meses[2]);
    }
else if (mes == 3) {
        console.log('La cantidad de dias del mes ' + mesElegir[3] + ' es: '  + meses[3]);
}
else if (mes == 4) {
    console.log('La cantidad de dias del mes ' + mesElegir[4] + ' es: ' + meses[4]);
}
else if (mes == 5) {
    console.log('La cantidad de dias del mes ' + mesElegir[5] + ' es: ' + meses[5]);
}
else if (mes == 6) {
    console.log('La cantidad de dias del mes ' + mesElegir[6] + ' es: ' + meses[6]);
}
else if (mes == 7) {
    console.log('La cantidad de dias del mes ' + mesElegir[1] + ' es: ' + meses[7]);
}
else if (mes == 8) {
    console.log('La cantidad de días del mes agosto es: ' + meses[8]);
}
else if (mes == 9) {
    console.log('La cantidad de dias del mes ' + mesElegir[9] + ' es: ' + meses[9]);
}
else if (mes == 10) {
    console.log('La cantidad de dias del mes ' + mesElegir[10] + ' es: ' + meses[10]);
}
else if (mes == 11) {
    console.log('La cantidad de dias del mes ' + mesElegir[11] + ' es: ' + meses[11]);
}
else if (mes == 12) {
    console.log('La cantidad de dias del mes ' + mesElegir[12] + ' es: ' + meses[12]);
}
else {
    console.log('No corresponde a ningun mes');
}


