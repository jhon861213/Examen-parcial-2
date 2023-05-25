// 5.
let uno = true;
let dos = "2";
let tres = 3;
let cuatro = null;
let cinco;
let seis = {numero: 6};
let siete = [7];

console.log(typeof uno);
console.log(typeof dos);
console.log(typeof tres);
console.log(typeof cuatro);
console.log(typeof cinco);
console.log(typeof seis);
console.log(typeof siete);

// 6. 
let nombreProducto = "piooner",
    precio = 500,
    direccionEnvio = "SantaCruz",
    pais = "Bolivia",
    costoEnvio = 100;

 // console.log(nombreProducto,precio,direccionEnvio,pais,costoEnvio);

// 7.

let libreria = "React es una biblioteca Javascript de código abierto creada por Facebook.";

// 8. 

console.log(libreria.length);

// 9. 

console.log(libreria.replace("React es una biblioteca","ReactNative es un framework"));

// 10. 

let frase1 = "REACT", 
    frase2 = "es una"
    frase3 = "BIBLIOTECA",
    frase4 = "JavaScript",
    frase5 = "de"
    frase6 ="CÓDIGO ABIERTO CREADA"
    frase7 = "por" 
    frase8 ="FACEBOOK."


console.log(frase1,frase2,frase3,frase4,frase5,frase6,frase7,frase8);


// 11. 

let automovil = 'TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI';
let autos =/TOYOTA, SUZUKI, BMW, FORD, KIA, ISUZU, AUDI/gi

console.log(automovil.match(autos));

// 12. 
let letra = "JavaScript";

console.error(letra.charCodeAt(6));

// 13. 

let A = " HOLA MUNDO ";

console.log(A. repeat(4));

// 14. 

let fra1 = 'Hola estudio "Sistema" y estoy llevando la materia de:';
let fra2 = "PROGRAMACION 1";
let fra3 = "Turno: Noche";
let fra4 = "En el grupo 2";

console.log(fra1);
console.log("  ",fra2);
console.log("  ",fra3);
console.log(fra4);   

// 15. 

let random = Math.random();
let numero = random * 26;
let valorFinal = numero + 25;

console.log(Math.floor(valorFinal)); 

// 16. 

console.log(libreria.charAt(8)); 

let lastIndex = libreria.length - 1;
console.log(libreria.charAt(lastIndex)); 

// 17. 


// 18. 
        
    let decimal = 9.8; 
    let decimal1 = Number(decimal);
    console.log(Math.floor(decimal1)); 
    
    let entero = -5;
    console.log(Math.abs(entero));


    let entero2 = 62;
    let entero2Float = parseFloat(entero2);
    console.log("62"); 
    
    let entero3 = "28";
    let numInt = Number(entero3);
    console.log(numInt); 

    let decimal2 = "15.65";
// 19.

console.log(Math.min(4, 8, 16, 18, -52, -3, -1, 7));

console.log(Math.max(4, 8, 16, 18, -52, -3, -1, 7));

// 20.

let num1 = 9.78
let num2 = 5.20
let num3 = 1.64
let num4 = 5.7
let num5 = 3.23

console.log(Math.floor(num1));
console.log(Math.floor(num2));
console.log(Math.floor(num3));
console.log(Math.floor(num4));
console.log(Math.floor(num5));


console.log(Math.ceil(num1));
console.log(Math.ceil(num2));
console.log(Math.ceil(num3));
console.log(Math.ceil(num4));
console.log(Math.ceil(num5));
