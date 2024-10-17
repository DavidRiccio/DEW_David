class Ejercito{
    constructor(nombre,soldados){
        this.nombre = nombre
        this.soldados= soldados
        this.strength = soldados * 5
    }
}


function batalla(){
    let ejercito1 = new Ejercito('Humanos',randomNum())
    let ejercito2 = new Ejercito('Trasgos', randomNum())
    console.log(ejercito1);
    console.log(ejercito2);
    if (ejercito1.strength > ejercito2.strength){
        console.log(`Los ganadores son los  ${ejercito1.nombre}`);
        document.getElementsByClassName('winner').textContent = `${ejercito1.nombre}`
        
    }else{
        console.log(`Los ganadores son los  ${ejercito2.nombre}`);
        document.getElementById('winner').textContent = `${ejercito2.nombre}`


    }
    
}

function  randomNum(){
let num =Math.floor( Math.random() * (100000-2000+1 )+2000)
return num 
}