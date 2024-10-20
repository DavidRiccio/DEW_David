const poder = {
    'WonderWoman': 'Lazo de la verdad',
    'Superman': 'Super Fuerza',
    'Batman': 'Dinero'
};

const seleccion = document.querySelector('#superheroes')

const poderParrafo = document.querySelector('#poder')

seleccion.addEventListener('change', () =>{
    const heroe = seleccion.value;
    poderParrafo.textContent = `Poder de ${heroe}:${poder[heroe]}`
})