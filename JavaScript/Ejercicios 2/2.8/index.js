class Superheroe {
    constructor(nombre,poder,nivel){
        this.nombre = nombre
        this.poder = poder
        this.nivel = nivel
    }
}




function createHero(){
    let AllSuper = []
    for(let i=0; i==15 ;i++){
        let sup = new Superheroe(`Super${i}`,randomNum(5000,1000),randomNum(1,10))
        AllSuper.push(sup)
        console.log(AllSuper)
        return AllSuper
    }
}

function  randomNum(min,max){
    let num =Math.floor( Math.random() * (max - min + 1) + min)
    return num 
    }
