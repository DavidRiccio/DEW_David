/* Como funciona la estructura del fetch */

/* Ejemplo 1 */
const url = "https://pokeapi.co/api/v2/pokemon/1/"
fetch(url)
    .then((response)=> response.json())
    .then((data)=>console.log(data))

/* Ejemplo 2 */

const url2 = "https://pokeapi.co/api/v2/pokemon/1/"
fetch(url2)
    .then((response)=> response.json())
    .then((data)=>console.log("Me llaman para mi turno"));
    console.log("Me pongo a la cola")

/* El fetch tambien admite otro campo que es el de opciones */
const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body:
}

