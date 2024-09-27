/* Ejercicio 1 */
/* 
function prueba(){
    let a = document.getElementById("1").value;
    let b = document.getElementById("2").value;
    let c = document.getElementById("3").value;

    if (a<0||b<0||c<0){
        console.error("Error: numero menor a 0")
    }
    else if (a==0 && b==0 && c==0) {
        console.error("Error todos los numeros son 0");
    }
    else if ((a + b + c)>10 && a != b && b != c && c != a){
        console.error("Error el numero es mayor de 10 y los numeros son diferentes")
    }
} */

/* Ejercicio 2 */
 function prueba2(){
    let a = document.getElementById("4").value;
    if (a === 0){
        console.log("‘Este es muy fácil… ¡prueba otro!")
    } else if (a == 2 || a ==4 || a ==6){
        console.log("El número es par")
        
    }else if (a == 1 || a ==3 || a ==5){
        console.log("El número es impar")
    }else{
        console.log("‘¡¡Sólo sé contar de 0 a 6!!")
    }

}

/* Ejercicio 3 */
function prueba3(){
 for (i = 0, j = 20; i > 8, j < 0 ;i++, j = j - 3){
    console.log(i, j);
 }
} 

/* Ejercicio 4 */
/* let result = 1, arg1, arg2, res1, res2;
while (result > 0) {
 arg2 = Math.random();
 res2 = res1/(arg1 + arg2);
 arg1 = Math.random() - 0.5;
 res1 = Math.sqrt(arg1);
 if (res1 < 0){
    continue
 }else if (arg1 + arg2 ==0){
    break
 }

 result = res1 + res2;
 console.log(result);
} */

/* Ejercicio 5 */

/* const today = new Date("2024-09-15")
const day = today.getDate();
const year = today.getFullYear() ;
const month = today.getMonth() + 1;
console.log(`${day}/${month}/${year}`) */



/* Ejercicio 6 */
/* 
let fecha1 = new Date ("02/04/2015");
console.log(fecha1);

let fecha2= new Date("2015-04-02");
console.log(fecha2);

let fecha3 = new Date("April 02,2015");
console.log(fecha3); */

/* Ejercicio 7 */

function passtime(birth){
}

passtime('2024-09-16')

/* Ejercicio 8 */

function hdec2hms(x){
    let time = String(x.split("."))
    let hours = time[0]
    let minutes = (parseFloat(time[1]) * 60 ) / 100
    let final_time = `${hours}:${minutes}`
    console.log(final_time)
}
console.log(hdec2hms(3.14))