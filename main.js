let puntoUsuario = 0;
let puntoMaquina = 0;
let maquinaP = document.getElementById('puntoMaquina');
let usuarioP = document.getElementById('puntoUsuario');
let final = document.getElementById('final');
let user = document.getElementById('user');

function opciones(opcionUsuario){
    let opciones = ['piedra','tijera', 'papel'];
    let opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];


    if(opcionUsuario === opcionMaquina){
        empate();

    }else if(
        (opcionUsuario === 'piedra' && opcionMaquina === 'tijera') ||
        (opcionUsuario === 'papel' && opcionMaquina === 'piedra') ||
        (opcionUsuario === 'tijera' && opcionMaquina === 'papel')
    ){
        ganaUsuario();

    }else{
        ganaMaquina();
    }

    if((puntoUsuario === 5) || (puntoMaquina === 5)){
        if(puntoUsuario === 5){
            final.innerText = 'Ganaste el Game'
        }

        if(puntoMaquina === 5){
            final.innerText = 'Perdiste el Game'

        }
        document.getElementById('resultado').style.display = 'none';
        user.style.display = 'none';
    }
}

function ganaUsuario(){
    puntoUsuario++
    document.getElementById('resultado').innerHTML = `Ganaste`;
    usuarioP.innerHTML = puntoUsuario;

}

function ganaMaquina(){
    puntoMaquina++
    document.getElementById('resultado').innerHTML = `Perdiste`;
    maquinaP.innerHTML = puntoMaquina;
}

function empate(){
    document.getElementById('resultado').innerHTML = `Empate`;

}
