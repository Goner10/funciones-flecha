//FUNCIONES FLECHA


/* Convierte la siguiente función en una función flecha:

function saludar() {
    return "Hola";

  } */

 const saludar = () => "Hola"
 console.log(saludar())


 /* Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
  return a / b; 

}  */
 
 const division = (a, b ) => a / b
console.log(division(10,2))

/* Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;

}  */

const miNombre = (nombre) =>  `Mi nombre es ${nombre}`;
console.log(miNombre("Gonzalo"))


/* Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
} */
 
const test2 = () => {
    console.log("Función test 2 ejecutada")
}
const test1 = (callback) => {
    callback()
}
test1(test2)




//FOREACH

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  //Crea un array con la gente mayor de 25 años y muéstralo por consola.

  let mayoresDe25 = [];

  gente.forEach((persona) => {
    if (persona.edad > 25) {
      mayoresDe25.push(persona);
    }
  });
  
  console.log(mayoresDe25);

  //Crea un array con la gente que empieza por J. 
 
  const genteConJ = gente.map(persona => {
    if (persona.nombre[0] === "J") {
        return persona;
    }
});

console.log(genteConJ)





//MAP

//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const mayor25 = gente.map(persona => {
  if (persona.edad >= 25) {
      return persona;
  }
});

console.log(mayor25)


//Crea un array con la gente que empieza por J.
const genteJ = gente.map(persona => {
  if (persona.nombre[0] === "J") {
      return persona;
  }
});

console.log(genteJ)




//FILTER

//Crea un segundo array que devuelva los impares

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = number.filter(numero => numero % 2 !== 0);

console.log(impares)



//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 
const foodList = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];


const comida= foodList.filter(food => food.isVeggie )
const frase  = comida.map(food => `Que rico ${food.name} me voy a comer!`)

console.log(comida)
console.log(frase)


//REDUCE

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [10, 2, 4, 13, 69];
const multiplicacion = numeros.reduce((a, b) => a * b)

console.log(multiplicacion)