/* 1-  Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por
    defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200). */

    function arrayRandom(num = 10, min = 100, max = 200){
        const array = [];
        for (let i = 0 ; i <= num -1; i++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            array.push(Math.floor(Math.random() * (max - min) + min));
        }
        console.log(array)
    }

 /*    2) Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y 
    luego ordenarlo */

    function sortArrayRandom(num = 10, min = 100, max = 200){
        const array = [];
        for (let i = 0 ; i < num; i++) { 
            min = Math.ceil(min);
            max = Math.floor(max);
            array.push(Math.floor(Math.random() * (max - min) + min));
        }
        array.sort((a, b) => a - b);
        console.log(array); 
    }

    /*3) Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array 
ordenado creado en el ejercicio anterior*/
    
    function randomSort(){
        let array = sortArrayRandom(20, 20, 100);
        let arrayRandom = array.sort(function() { return Math.random() - 0.5 }); 
        console.log(arrayRandom); 
    }
    
    randomSort();

  /*   4) Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) 
y para cada elemento x, gestionar un nuevo array de la siguiente forma:
•x <= -5: Eliminar el primer elemento del array
•-5 < x <= 0: Eliminar el último elemento del array
•0 < x <=  10: Añadir x al principio del array
•10 < x <=  10: Añadir x al final del array
Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada 
(eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras 
realizar la operación */








/* 5) Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada 
elemento. Probar con un array aleatorio de 20 números entre 60 y 100.  */

function arraySquareRoot(){
    let array = arrayRandom(20,60,100)
    let roots = array.map(function (num) {
        return Math.sqrt(num);
});
console.log(array)
console.log(roots)
}
arraySquareRoot()








/* 6) Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos 
valores (si el valor se repite, informar sólo sobre la primera vez que aparezca). Probar con un array  
aleatorio de 20 números entre -100 y 100.*/










/* 7) Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, 
informar si es la primera vez que aparece, o si se trata de un elemento repetido. */









/* 8) Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había 
aparecido con anterioridad.
     */