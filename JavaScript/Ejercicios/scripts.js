/* Ejercicio 1 */

function prueba(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        console.error("Error: número menor a 0");
    } else if (a == 0 && b == 0 && c == 0) {
        console.error("Error: todos los números son 0");
    } else if ((a + b + c) > 10 && a !== b && b !== c && c !== a) {
        console.error("Error: el número es mayor de 10 y los números son diferentes");
    }
}



/* Ejercicio 2 */
function prueba2(a) {
    if (a === 0) {
        console.log("‘Este es muy fácil… ¡prueba otro!");
    } else if (a == 2 || a == 4 || a == 6) {
        console.log("El número es par");
    } else if (a == 1 || a == 3 || a == 5) {
        console.log("El número es impar");
    } else {
        console.log("‘¡¡Sólo sé contar de 0 a 6!!");
    }
}


/* Ejercicio 3 */
function prueba3() {
    for (let i = 0, j = 20; i < 8 || j > 0; i++, j -= 3) {
        console.log(i, j);
    }
}


/* Ejercicio 4 */
let result = 1, arg1, arg2, res1, res2;

while (result > 0) {
    arg1 = Math.random() - 0.5;
    res1 = Math.sqrt(Math.max(arg1, 0));
    arg2 = Math.random();
    
    if (arg1 + arg2 === 0) {
        break;
    }

    res2 = res1 / (arg1 + arg2);
    result = res1 + res2;
    console.log(result);
}


/* Ejercicio 5 */

const today = new Date("2024-09-15")
const day = today.getDate();
const year = today.getFullYear() ;
const month = today.getMonth() + 1;
console.log(`${day}/${month}/${year}`)



/* Ejercicio 6 */

let fecha1 = new Date ("02/04/2015");
console.log(fecha1);

let fecha2= new Date("2015-04-02");
console.log(fecha2);

let fecha3 = new Date("April 02,2015");
console.log(fecha3);

/* Ejercicio 7 */

function passtime(fechaStr, unidad) {
    const birth = new Date(fechaStr);
    const actualDate = new Date();
    const diferencia = actualDate - birth;
    switch (unidad) {
        case 'd':
            return Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Días
        case 'h':
            return Math.floor(diferencia / (1000 * 60 * 60));
        case 'm':
            return Math.floor(diferencia / (1000 * 60)); 
        case 's':
            return Math.floor(diferencia / 1000); 
        default:
            return "Error: La unidad no es";
    }
}



/* Ejercicio 8 */

function hdec2hms(x) {
    const hours = Math.floor(x);
    const decMinutes = (x - hours) * 60;
    const minutes = Math.floor(decMinutes);
    const seconds = Math.round((decMinutes - minutes) * 60);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/* Ejercicio 9 */
function fechaJuliana(fechaStr) {
    const fecha = new Date(fechaStr);
    const tiempoUnix = fecha.getTime();
    const diasUnix = tiempoUnix / (1000 * 60 * 60 * 24);
    const fechaJuliana = diasUnix + 2440587.5;
    
    return fechaJuliana;
}


/* Ejercicio 10 */
function deg2rad(x) {
    return x * (Math.PI / 180);
}

function rad2deg(x) {
    return x * (180 / Math.PI);
}

function sinDeg(x) {
    return Math.sin(deg2rad(x));
}

function cosDeg(x) {
    return Math.cos(deg2rad(x));
}

function sinDegAlt(x) {
    const cosValue = cosDeg(x);
    return Math.sqrt(1 - cosValue * cosValue);
}

function cosDegAlt(x) {
    const sinValue = sinDeg(x);
    return Math.sqrt(1 - sinValue * sinValue);
}
