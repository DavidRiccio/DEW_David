class Villano {
    constructor(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }

    cambiarPlan(nuevoplan) {
        this.plan = nuevoplan;
    }
}

const joker = new Villano('Joker', 'Crear caos en Gotham');

function mostrarPlan() {
    document.getElementById('plan-result').innerHTML = `El plan de ${joker.nombre} es: ${joker.plan}.`;
    
    joker.cambiarPlan('Corromper a Batman');
    
    setTimeout(() => {
        document.getElementById('plan-result').innerHTML = `El nuevo plan de ${joker.nombre} es: ${joker.plan}.`;
    }, 3000);
}
