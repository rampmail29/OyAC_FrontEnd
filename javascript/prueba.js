// Variable de tipo número
const numero = 42;

// Variable de tipo cadena (string)
const cadena = "Hola, profe!";

// Variable de tipo booleano
const booleano = true;

// Variable de tipo arreglo (array)
const arreglo = [1, 2, 3, 4, 5];

// Variable de tipo objeto (object)
const objeto = {
    nombre: "JahirR",
    edad: 30,
    ciudad: "Floridablanca",
};

// Mostrar las variables en la consola
console.log("Número:", numero);
console.log("Cadena:", cadena);
console.log("Booleano:", booleano);
console.log("Arreglo:", arreglo);
console.log("Objeto:", objeto);



// Ejercicio 2

const datosPersonales = {
    nombre: "JahirR",
    edad: 30,
    ciudad: "Floridablanca",
    ocupacion: "Ingeniero",
    correoElectronico: "jahir090@gmail.com"
};

console.log("Datos Personales:");
console.log("Nombre:", datosPersonales.nombre);
console.log("Edad:", datosPersonales.edad);
console.log("Ciudad:", datosPersonales.ciudad);
console.log("Ocupación:", datosPersonales.ocupacion);
console.log("Correo Electrónico:", datosPersonales.correoElectronico);


//ejercicio 3

const artistasMusicales = [
    "The Beatles",
    "Queen",
    "Pink Floyd",
    "Michael Jackson",
    "Led Zeppelin",
    "David Bowie",
    "Bob Dylan",
    "Elton John",
    "Prince",
    "U2"
];

console.log("artistas musicales favoritos:");
console.log(artistasMusicales);


//ejercicio 4 

// Crear un array de objetos
const artistasCanciones = [
    { "The Beatles": "Let It Be" },
    { "Queen": "Bohemian Rhapsody" },
    {
        "Pink Floyd": {
            cancion: "Comfortably Numb",
            miembros: {
                vocalista: "Roger Waters",
                guitarrista: "David Gilmour",
                tecladista: "Richard Wright"
            }
        }
    }
];

// Imprimir uno de los valores del objeto interno
console.log("Nombre del vocalista de Pink Floyd:", artistasCanciones[2]["Pink Floyd"].miembros.vocalista);


//ejercicio 5

// Crear el objeto con dos arrays
const informacionCiudades = {
    ciudades: ["Bucaramanga", "Medellín", "Bogotá", "Cali"],
    poblacion: [1200000, 2500000, 8000000, 2400000]
  };
  
  // Mostrar la información en la consola
  for (let i = 0; i < informacionCiudades.ciudades.length; i++) {
    console.log(
      `CIUDAD: ${informacionCiudades.ciudades[i]} - POBLACIÓN APROX.: ${informacionCiudades.poblacion[i]}`
    );
  }
  







