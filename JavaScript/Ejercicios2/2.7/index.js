class Guerrero {
    constructor(nombre,fuerza,nivel){
        this.nombre = nombre
        this.fuerza = fuerza
        this.nivel = nivel 
    }
}

function batalla(){
   const Jedi = new  Guerrero('Anakyn Skywalker',randomNum(20000,10000),randomNum(10,1))
   const Sith = new  Guerrero('Nichole Vader',randomNum(20000,10000),randomNum(10,1))
   if (Jedi.fuerza > Sith.fuerza){
    document.getElementById('winner').textContent = `${Jedi.nombre}`
    console.log(`${Jedi.nombre}`)
   }else{
    document.getElementById('winner').textContent = `${Sith.nombre}`
    console.log( `${Sith.nombre}`);

   }
}

function  randomNum(min,max){
    let num =Math.floor( Math.random() * (max - min + 1) + min)
    return num 
    }