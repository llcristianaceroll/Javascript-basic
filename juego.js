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

///////////.***********metodos******************////////////

function Persona(nombre) { 
    this.nombre = nombre;
    let dni = "1234567"; 
    console.log("Hola soy " + nombre);

    this.getDni = function() { /// esto es un metodo= accion quue tiene una clase ej accder al dni que es variable privada
        return dni ;
    }
}

let objetoPersona = new Persona("Cristian Acero"); 
console.log(objetoPersona.nombre);               
console.log(objetoPersona.getDni());  // ahora si puede acceder al dni asi sea privada ya que estoy generando un metodo que me devuelve dni

/////////////metodo para saludar////////

function Persona(nombre, edad) { 
    this.nombre = nombre;
    this.edad = edad;
    let dni = "1234567"; 
    
    this.getDni = function() { /// esto es un metodo= accion quue tiene una clase ej accder al dni que es variable privada
        return dni ;
    }

    this.saludar = function() {
        console.log(`Hola soy ${nombre} tengo ${edad} anios mi dni es ${dni}`);
    }/// este es un metodo para saludar


}

let objetoPersona = new Persona("Cristian Acero", 26); // instancia de la clase persona
let objetoPersona2 = new Persona("Omaira", 50); /// nueva instancia de la clase persona
              
objetoPersona.saludar();
objetoPersona2.saludar();


////metodo dentro de otro metodo con el dni///

function Persona(nombre, edad) { 
    this.nombre = nombre;
    this.edad = edad;
    let dni = "1234567"; 
    
    this.getDni = function() { /// esto es un metodo= accion quue tiene una clase ej accder al dni que es variable privada
        return dni ;
    }

    this.saludar = function() {
        console.log(`Hola soy ${nombre} tengo ${edad} anios mi dni es ${this.getDni()}`);
    }/// este es un metodo para saludar


}

let objetoPersona = new Persona("Cristian Acero", 26); // instancia de la clase persona
let objetoPersona2 = new Persona("Omaira", 50); /// nueva instancia de la clase persona
              
objetoPersona.saludar();
objetoPersona2.saludar();


//***************metodo fuera de la clase-prototipos****************//

function Persona(nombre, edad) { 
    this.nombre = nombre;
    this.edad = edad;
    let dni = "1234567"; 
    
    this.getDni = function() {
        return dni ;
    }
/*
    this.saludar = function() {
        console.log(`Hola soy ${nombre} tengo ${edad} anios mi dni es ${this.getDni()}`);
    }
*/
}

Persona.prototype.saludar = function() {
    console.log(`Hola soy ${this.nombre} tengo ${this.edad} anios mi dni es ${this.getDni()}`);
} /// esto es un metodo creado fuera de clase, es el mismo de this.saludar


let objetoPersona = new Persona("Cristian Acero", 26); 
let objetoPersona2 = new Persona("Omaira", 50); 

objetoPersona.saludar();
objetoPersona2.saludar();

//***************Class**************/

class Persona {

    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
        let dni;
    }

    set estableceDni(valor) {
        this.dni = valor;
    }

    get regresaDni() {
        return this.dni;
    }

    saludar(){
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} anios mi dni es ${this.dni}`);
    }
}

let objetoPersona = new Persona("Cristian Acero", 26);
objetoPersona.estableceDni = 1234567; ///nos fuimos al set
objetoPersona.dni = 123; /// aqui alteramos el dato de la propiedad
objetoPersona.saludar();
console.log(objetoPersona.regresaDni);