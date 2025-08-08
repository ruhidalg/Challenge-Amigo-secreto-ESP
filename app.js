// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroGenerado =0;

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo.trim() === "" ) {
         alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreDeAmigo);
        document.querySelector('#amigo').value = '';
    }
    actualizarListaDeAmigos()
    return;
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""
    for (i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    } 
return;
}

function sortearAmigo() {
    //console.log(amigos.length);
if (amigos.length>0) {
    numeroGenerado =  Math.floor(Math.random()*amigos.length);
    console.log(amigos.length);
    console.log(numeroGenerado);
    console.log(amigos[numeroGenerado]);
    //amigos[numeroGenerado];
    let amigoSorteado = document.getElementById('resultado');
    amigoSorteado.innerHTML = "";
    amigoSorteado.innerHTML = `<li>El amigo secreto sorteado es: ${amigos[numeroGenerado]}</li>`;
} else {
    alert('Por favor, inserte un nombre y presione Añadir');
}
    return;
}
