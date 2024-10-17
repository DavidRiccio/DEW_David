document.getElementById('apagado').addEventListener('mouseover', () => {
    document.getElementById('apagado').style.display = 'none';
    cambiarImg1();
});
document.getElementById('encendido').addEventListener('mouseout', () => {
    document.getElementById('encendido').style.display = 'none';
    cambiarImg2();
});

function cambiarImg1(){
    const img = 'img/encendido.png';
    const body = document.getElementById('body');
    body.insertAdjacentHTML('beforeend',`<img src=${img}></img>`);
}
function cambiarImg2(){
    const img = 'img/apagado.png';
    const body = document.getElementById('body');
    body.insertAdjacentHTML('beforeend',`<img src=${img}></img>`);
}