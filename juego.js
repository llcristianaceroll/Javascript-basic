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
   var estudiante = estudiantes.shift();/// shif nos elmina el elemento con indice cero, y ese elemento lo podemos guardar solito den otra variable
console.log(estudiante);                /// pop es lo opuesto a shift
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

//////////métodos de recorridos de Arrays filter, map, find, forEach, some//

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
});///// filtra parte del articulo ejemplo solo el nombre sin los costos

var encuentraArticulos = articulos.find(function(articulo) {
    return articulo.nombre==="Drone";
});////busca el valor que igualemos sino nos tarera el primer valor o propiedad

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});//// filtra el array y nos trae las cosas que pidamos

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 2000000;// nos devuelvo verdadero o falso
});

////////hoisting///////// cuandos las variables y funciones de procesan antes que se ejecute el codigo

var miNombre;//declarar
miNombre = ""//inicilaiza

var miNombre = "ccc"

/////hoisting/////////

console.log(miNombre);// sale undefined porque llamamos una variable antes de declarar e inicianizarla
// estos es lo que pasa//
// var miNombre = undefined
//console.log(miNombre); => undefined por eso se declara e inicializa primero
var miNombre = "Diego"; 

///////////////////

var miNombre = undefined;

console.log(miNombre + "Soy ese hoisting");

miNombre = "Cristian"; //// el console nos muestra undefined y Critian

/////Hoisting funcionnes///
//// es cuando las varia y func  se declaran al incio del codigo  antes que se ejecute cualqueir linea de codigo

hey()/// no importa donde llame hey() se me ejecuta por el hoisting
    //// las funciones se declaran antes que las variables siempre por el hoisting

function hey () {
    console.log("Hola" + miNombre);/// me muestra Hola undefined
}

var miNombre = "Cristian";
//// simpre declara al inicio funciones primero y despues llamarla
//// para evitar variables que mo han sido declaradas.


/////////////////////////clases*///////////////

// clase = define las carateristicas del objeto
// objeto =  una instancia de una clase
// propiedad = Una caracteristica del objeto
// metodo = una capacidad del objeto
// constructor =  es un metodo llamado en el momento de la creacion de instancias

function Persona(nombre) { //// esto es una clase Persona
    this.nombre = nombre; //// dentro va los metodos, propiedas, variables etc y vuelve el constructor
    let dni = "1234567"; //// sino pongo this esta variable es privada y no publica ya que no puedo accder desde fuera.
    console.log("Hola soy " + nombre);
}

let objetoPersona = new Persona("Cristian Acero"); /// esto es una instancia de la clase persona donde podemos acceder 
console.log(objetoPersona.nombre);               // variables publicas = las que podemos acceder desde afiera y tiene this.
console.log(objetoPersona.dni);               // variables privada = me va a mostrar undefined