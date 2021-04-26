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
//////////////////Objetos///////////////

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
    detallDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detallDelAuto();
/// objeto: coleccion de propiedades
///instancia: obejeto que deriva de otro objeto
///metodo: es cuando se asigna una propiedad tipo funcion a un objeto

////////Funcion Constructora///////////

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

var newAuto = new auto("Ferrari", "S", "2020");
var newAuto2 = new auto("Tesla", "X", "202");

//////////métodos de recorridos de Arrays filter, map, find,forEach//

var articulos = [
    {nombre:"Libro", costo:20000},
    {nombre:"TV", costo:1500000},
    {nombre:"Celular", costo:4000000},
    {nombre:"Dron", costo:2800000},
    {nombre:"Gorra", costo:100000}
];

var articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo <=2000000;
});///// filtra el articulo  completo me lo guarda con la propiedades completas

var articulosNombre =  articulos.map(function(articulo) {
    return articulo.nombre;
});

var encuentraArticulos = articulos.find(function(articulo) {
    return articulo.nombre==="Drone";
});////busca el valor que igualemos sino nos tarera el primer valor o propiedad

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});