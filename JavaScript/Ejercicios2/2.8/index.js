class Superheroe {
    constructor(nombre, poder, nivel) {
        this.nombre = nombre;
        this.poder = poder;
        this.nivel = nivel;
    }
}

function createHero() {
    let AllSuper = [];
    for (let i = 0; i < 15; i++) {
        let sup = new Superheroe(`Super${i}`, randomNum(1000, 5000), randomNum(1, 10));
        AllSuper.push(sup);
    }
    return AllSuper;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function findMostPowerfulHero(allSuper) {
    let mostPowerful = allSuper[0];
    for (let i = 1; i < allSuper.length; i++) {
        if (allSuper[i].poder > mostPowerful.poder) {
            mostPowerful = allSuper[i];
        }
    }
    return mostPowerful;
}

function getWinner() {
    let AllSuper = createHero();
    let mostPowerfulHero = findMostPowerfulHero(AllSuper);
    // Mostrar el resultado en el HTML
    document.getElementById("result").innerHTML = 
        `El héroe con más poder es: ${mostPowerfulHero.nombre}, con un poder de ${mostPowerfulHero.poder}.`;
}
