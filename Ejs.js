//EJ 1 Declara 6 variables a las que asignaremos los siguientes valores. 1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57. Una vez creadas muestra por consola los valores almacenados y el tipo de dato que nos indica el operador typeof.

/* let v1 = 1357;
let v2 = 135.7; 
let v3 = 135e7; 
let v4 = 0b1010;
let v5 = 0o1357;
let v6 = 0x1A57;



console.log(
    v1,typeof v1
    ,v2,typeof v2
    ,v3,typeof v3
    ,v4,typeof v4
    ,v5,typeof v5
    ,v6,typeof v6
); */

//EJ 2 Pide al usuario un  número utilizando el método prompt(), guarda ese dato en una variable. OJO guardarlo de manera que sea un tipo  Number no un String. Compruébalo mostrando por consola el tipo de dato guardado  con el operador typeof.

/* let dato = prompt();
let datoNumero = Number.parseFloat(dato);
console.log(typeof datoNumero);
console.log (datoNumero); */

//EJ 3 Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. Almacena cada dato en una variable diferente.  A continuación muestra la siguiente información.
//Por consola una frase que incluya su nombre , apellidos y la edad.
//En el documento html incluye con formato h3 la misma información.
//En un alert muestra la siguiente información “Dentro de número años tendras x años”. Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio

/* let nombre = prompt("Introduce tu nombre");
let apellidos = prompt("Introduce tu apellido");
let edad = prompt("Introduce tu edad");
let numero = prompt("Introduce un numero del 1 al 10");

console.log("Te llamas "+ nombre + " " + apellidos + " tienes " + edad + " años y tu número es el " + numero);
let parrafo = "<h3>Te llamas "+ nombre + " " + apellidos + " tienes " + edad + " años y tu número es el " + numero+ "</h3>";
document.write(parrafo);

let añosDespues = 12;
edadNumero = parseInt(edad);
let edadSumada = edadNumero + 12;

alert("Dentro de " +añosDespues+ " años tendras " +edadSumada+ " años"); */

//EJ 4 Pide al usuario un string, Muestra en el documento la posición que ocupa la primera “a”

/* let dato = prompt();

let index = dato.indexOf("a")

console.log(index); */

//Ej 5 Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del tercer string. ejemplo
//string 1 “Hola caracola”
//string 2 “cara”
//string 3 “era”
//resultado a mostrar con un alert “Hola eracola”.


/* let s1 = prompt();
let s2 = prompt();
let s3 = prompt();

s4 = s1.replace(s2,s3);

console.log (s4);
 */

//EJ 6 Amplía el ejercicio anterior a todas las ocurrencias.

/* let s1 = prompt();
let s2 = prompt();
let s3 = prompt();

s4 = s1.replaceAll(s2,s3); 

console.log (s4); */

//EJ 7 Pide dos strings al usuario. Debes mostrar el número de veces que el segundo string está incluido en el primero.

/* let s1 = prompt();
let s2 = prompt();


let vecesEncontras = s1.matchAll(RegExp(`${s2}\g`2);

console.log(vecesEncontras); */

//EJ 8 ¿Cuáles son los resultados de estas expresiones?. Anotalo en un comentario antes de ejecutarlo y luego compruébalo mostrándolo por consola.

//"" + 1 + 0;//10
// "" - 1 + 0;//-1
//true + false;//1
//6 / "3";//2
//"2" * "3";//6
//4 + 5 + "px";//9px
//"$" + 4 + 5;//$45
//"4" - 2;//2
//"4px" - 2;//NaN
//"-9" + 5;//-95
//"-9" - 5;//-14
//null + 1;//1
//undefined + 1;//NaN
//console.log(" \t \n" -2);//-2

//EJ 9 Arregla el código del ejemplo para que el resultado sea 3.

/* let a = prompt("¿Primer numero?",1);
let b = prompt("¿Segundo numero?",2);

alert(parseInt(a)+parseInt(b)); */

//EJ 10 ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
/* let a = 1, b = 1;
let c = a ++;
let d = b ++;

console.log(a,b,c,d); */

//a=2,b=2,c=1,d=1

//EJ 11 ¿Cuál será el resultado de las siguientes expresiones?

console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null == "\n0\n");


