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

// var piedra = "piedra";
// var papel = "papel";
// var tijera = "tijera";

// function juego (usuario, maquina) {

// switch (true) {

//     case (usuario===piedra && maquina===tijera):
//     console.log(" Gana usuario con piedra");
//     break;

//     case (usuario===papel && maquina===piedra):
//         console.log("Gana usuario con papel");
//     break;

//     case (usuario===tijera && maquina===papel):
//     console.log(" Gana usuario con tijera");
//     break;

//     case (maquina===usuario):
//         console.log("Empate");
//     break;

//     default:
//         console.log(" Gana maquina con " + maquina );
// }
// }
//juego (piedra, papel)

var estudiantes = ["Cristian","Andres","Pablo","Juan"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++ ) {
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
///////////////////////////////////////////////////////////
var estudiantes = ["Cristian","Andres","Pablo","Juan"];

function saludarEstudiantes (estudiantes) {
    console.log(`Hola ${estudiantes}`);
}

while (estudiantes.length > 0) {
console.log(estudiantes);
   var estudiante = estudiantes.shift();
console.log(estudiante);
   saludarEstudiantes(estudiante);
}
//////////////////Objetos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
    detallDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detallDelAuto();