// var piedra = "piedra";
// var papel = "papel";
// var tijera = "tijera";

// function juego (usuario, maquina) {

//     if (usuario===piedra && maquina===tijera) {
//         console.log(" Gana usuario con piedra");
//     }
//     else if (usuario===papel && maquina===piedra) {
//         console.log(" Gana usuario con papel ");
//     }
//     else if (usuario===tijera && maquina===papel) {
//         console.log(" Gana usuario con tijera ");
//     }
//     else if (maquina===usuario) {
//         console.log("Empate");
//     }
//     else  {
//         console.log(" Gana maquina con " + maquina );
//     }
// }

//juego (piedra, papel)

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function juego (usuario, maquina) {

switch (true) {

    case (usuario===piedra && maquina===tijera):
    console.log(" Gana usuario con piedra");
    break;

    case (usuario===papel && maquina===piedra):
        console.log("Gana usuario con papel");
    break;

    case (usuario===tijera && maquina===papel):
    console.log(" Gana usuario con tijera");
    break;

    case (maquina===usuario):
        console.log("Empate");
    break;

    default:
        console.log(" Gana maquina con " + maquina );
}
}
//juego (piedra, papel)
