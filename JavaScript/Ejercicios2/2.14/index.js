class Gema {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class Thanos {
    constructor() {
        this.gemas = [];
    }
    
    recolectarGema(gema) {
        this.gemas.push(gema);
    }
    
    poderTotal() {
        return this.gemas.reduce((total, gema) => total + gema.poder, 0);
    }
    
    mostrarGemas() {
        return this.gemas.map(gema => `${gema.nombre} (Poder: ${gema.poder})`);
    }
}

const thanos = new Thanos();
const gemasData = [
    new Gema("Gema del Espacio", 10),
    new Gema("Gema del Tiempo", 20),
    new Gema("Gema de la Realidad", 30)
];

const gemasList = document.getElementById('gemas-list');
const poderTotalDisplay = document.getElementById('poder-total');
const recolectarButton = document.getElementById('recolectar-gema');

function actualizarInterfaz() {
    gemasList.innerHTML = '';
    thanos.mostrarGemas().forEach(gema => {
        const li = document.createElement('li');
        li.textContent = gema;
        gemasList.appendChild(li);
    });
    poderTotalDisplay.textContent = thanos.poderTotal();
}

recolectarButton.addEventListener('click', () => {
    const randomGema = gemasData[Math.floor(Math.random() * gemasData.length)];
    thanos.recolectarGema(randomGema);
    actualizarInterfaz();
});

actualizarInterfaz();
