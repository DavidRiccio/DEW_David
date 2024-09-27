//1-Realizar una función que indicando un texto y un carácter (ambos obligatorios, comprobar que el segundo parámetro es realmente un único caracter), nos diga cuántas veces aparece el carácter en el texto.
function randomArray(){
    let sentence = String(document.getElementById("2").value)
    let char = String(document.getElementById("3").value)
    let counter = 0;
    if (char.length == 1){
        for (let c of sentence)
            if (c == char){
                counter++;
            }
        result=counter
    }else{
        result = 'No se pudo ejecutar'
    } 
    document.getElementById("result1").textContent= result
}

//2-Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) y que devuelva la suma y la media de todos los elementos. Comprobar que todos los argumentos sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos").

function getAvg(){

}


//3-Implementar una función que dados dos números, nos escriba el resultado de la suma con console.log usando 4 formas diferentes (lista de argumentos, concatenación de strings, marcadores de posición y plantillas).


function fourSum(){
    let number1 = Number(document.getElementById("ej3-1").value)
    let number2 = Number(document.getElementById("ej3-2").value)
    let rs1,rs2,rs3,rs4 = 0
    rs1 = number1 + number2
    rs2 = String(number1) + String(number2);
    rs3 = console.log('La suma es %d',number1 + number2);
    rs4 = `La suma es ${number1 + number2}`;

    document.getElementById("rs1").textContent= rs1
    document.getElementById("rs2").textContent= rs2
    document.getElementById("rs3").textContent= 'El resultado está en consola'
    document.getElementById("rs4").textContent= rs4

}



//4-Escribir una función que dados dos números, nos devuelva la división del primero entre el segundo si el resultado es un valor númerico, y, si no, que indique dónde está el problema (resultado es infinito, el númerador o el denominador no eran números, o estaban indefinidos, etc.)
 

function division(){
    let number1 = Number(document.getElementById("ej4-1").value)
    let number2 = Number(document.getElementById("ej4-2").value) 
    let result = ''
    if (isNaN(number1)|| isNaN(number2)){
        result = 'Alguno de los argumentos no es un numero espabila'
    }else if (number2 === 0){
        result = 'No se puede dividir un numero por 0'
    }
    else{
        result = number1 / number2
    }
    document.getElementById("resultado-ej4").textContent = result;
}


//5-Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene comor resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.

function dni(){
    let number = Number(document.getElementById("ej5-1").value)
    const letters = 'TRWAGMYFPDXBNJZSQVHLCKET'
    let letterIndex = number % 23
    let result = `${number}${letters[letterIndex]}`
    document.getElementById("resultado-ej5").textContent = result;

}



/*6-Implementar una función que procese una línea CSV (Comma-Separated Values). El primer parámetro es el texto (por defecto vacío) y el segundo es el separador o delimitador (por defecto una coma ",", pero el usuario podría indicar cualquier otro). Por ejemplo, la salida de la línea "coche|rojo|10 años|diesel|5 puertas" usando como delimitador "|", sería similar a la siguiente:
Se han detectado 5 elementos:
Elemento 1: coche
Elemento 2: rojo
Elemento 3: 10 años
Elemento 4: diesel
Elemento 5: 5 puertas*/

function csv(){
    let texto = document.getElementById("ej6-1").value;
    let delimitador = document.getElementById("ej6-2").value;
    let textArray = texto.split(delimitador)
    let numElements = textArray.length
    let result = `Hay ${numElements} Elementos, 
    Elemento 1 : ${textArray[0]}
    Elemento 2 : ${textArray[1]}
    Elemento 3 : ${textArray[2]}
    Elemento 4 : ${textArray[3]}
    Elemento 5 : ${textArray[4]}
    `
    document.getElementById("resultado-ej6").textContent = result;
}


/* 7- Realizar una función que dado un texto, lo convierta a minúscula y elimine los espacios iniciales y finales, y devuelva la suma de los siguientes puntos:
+1 si el texto empieza por "el" o por "la"
+10 si el texto finaliza en gerundio ("ando", "endo")
+100 si el texto contiene al menos una vez la preposición "con" directamente entre otras dos palabras. */

function toMinus(){
    let result = 0
    let text = document.getElementById("ej7-1").value
    let textLowers = text.toLowerCase().trim()
    if (textLowers.startsWith('la')|| textLowers.startsWith('el')){
        result+=5
    }if (textLowers.endsWith('ando')||textLowers.endsWith('endo')){
        result+=10
    }if (textLowers.includes(' con ')){
        result+=100
    }
    document.getElementById("resultado-ej7-1").textContent = textLowers;
    console.log(textLowers)
    document.getElementById("resultado-ej7-2").textContent = result;
    console.log(result)

}


/* 8-Escribir una función que busque la cadena "arriba" en un texto. La función deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo". */
    function replaceUp(){
        let text = document.getElementById("ej8-1").value;
        let result = ''
        let result2= ''
        let textReplaced = text.replaceAll('arriba','abajo');
        if (text.includes('arriba')){
            result = 'La palabra incluye arriba';
            result2 = textReplaced
        }
        else{
            result = 'No está la palabra arriba en el texto'
            result2=''
            
        }

        document.getElementById('resultado-ej8-1').textContent = result
        document.getElementById('resultado-ej8-2').textContent = result2

    }

/* 9-Implementar una función que dado un texto, nos indique si todas las letras son minúsculas o mayúsculas, o una combinación de ambas. */

function mayus(){
    let text = document.getElementById("ej9-1").value;
    let result = ''
    let text2 = text.toUpperCase();
    console.log(text2)
    if (text == text.toUpperCase()){
        result = 'Todas son mayusculas'
    }else if(text == text.toLowerCase()){
        result = 'Todas son minusculas'
    }else{
        result='Hay una combinacion de ambos'
    }
    document.getElementById("resultado-ej9").textContent= result;
}


/* 10- Diseñar una función que detecte palíndromos, es decir, frases que se lean igual de izquierda a derecha o de derecha a izquierda. Por ejemplo: "Roma ni se conoce sin oro ni se conoce sin amor". */


function palindrome(){
    let text = String(document.getElementById("ej10-1").value).toLowerCase()
    let textLetters = text.split('')
    let result = ''
    if (textLetters == textLetters.reverse()){
        result = 'Es un palindromo'
    }else{
        result = 'No es un palindromo'
    }
    document.getElementById("result-ej10").textContent = result;
}