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
        return array; 
    }
    
    function randomSort(){
        let array = sortArrayRandom(20, 20, 100);
        let arrayRandom = array.sort(function() { return Math.random() - 0.5 }); 
        console.log(arrayRandom); 
    }
    
    randomSort();
    