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

/* console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); //true
console.log(undefined == null); // true
console.log(undefined === null);//false
console.log(null == "\n0\n"); //false
console.log(null == "\n0\n"); */ // flase

//EJ 12 Usa el operador “?” para escribir un código que nos pida un número y nos muestre un mensaje si es mayor o igual que cero y otro mensaje si es menor estricto que cero.

//EJ 13 Crea un programa  utilizando la sentencia if else  que pida al usuario que introduzca una edad y muestre el siguiente mensaje en función del número introducido:
//EJ 14 Mejora el ejercicio anterior de manera que le pregunte al usuario si quiere introducir otra edad . También debe comprobar si es un número mayor que cero y en caso contrario pedir al usuario que lo intente otra vez hasta que sea correcto.

//0-12: Niño
//13-26: Joven
//27-65: Adulto
//>65: Jubilado

/*
 let dato = prompt("Introduce una edad");

if (dato > 65){
    console.log("Jubilado")
}else if(dato>26){
    console.log("Adulto")
}else if(dato>12){
    console.log("Joven")
}else if(dato>-1){
    console.log("Niño")
}else{
    console.log("Introduce una edad válida")
} 
*/

//EJ 15 Construye un programa que pida   un número del 1 al 10 al usuario, luego muestra por pantalla la tabla de multiplicar de ese número hasta 10. Para ello muestra en líneas diferentes el siguiente mensaje: “ 8 por 1 = 8” y así sucesivamente. Suponiendo que el usuario hubiera introducido un 8.

/* let dato = prompt("introduce un numero del 1 al 10");

for (let i = 1; i < 11; i++) {
    console.log(dato + " por " + i + " = " + (dato*i));
} */

//EJ 16 Crea un programa que sea un “pequeño traductor” de nombres de frutas. A partir de una lista de 5 Frutas en español (“Pera”, “Manzana”,”Piña”,”Fresa”,”Naranja”) el programa pedirá al usuario el nombre de una fruta, en el caso de que corresponda al listado le mostrará en un cuadro de diálogo la traducción al Inglés. En el caso de otro texto mostrará “Fruta desconocida”. Para este ejercicio debes usar una estructura switch. 

//EJ 17 Mejora el anterior ejercicio de manera que el programa traduzca correctamente a pesar de que la primera letra esté indistintamente en mayúscula o en minúscula. ¿Y si cualquier letra está en mayúscula o minúscula indistintamente?

/* let lista = Array("PERA","MANZANA","PIÑA","FRESA","NARANJA");
let datoBruto = prompt("Introduce una fruta");

let dato = datoBruto.toUpperCase();

console.log(dato);

switch (dato){
    case(lista[0]):{
        console.log("Pear");
        break;
    }
    case(lista[1]):{
        console.log("Apple");
        break;
    }
    case(lista[2]):{
        console.log("Pineapple");
        break;
    }
    case(lista[3]):{
        console.log("Strawberry");
        break;
    }
    case(lista[4]):{
        console.log("Orange");
        break;
    }
    default:{
        console.log("Introduce una fruta valida");
        break;
    }
}  */

// EJ 18 Crea una archivo js que muestre en un documento html un rombo construido con asteriscos. Para ello el programa debe pedir al usuario el número de líneas del rombo y una vez comprobado que el número es mayor que 0 e impar (con un número par no sale un rombo) el programa debe dibujarlo. Por ejemplo este es el resultado al poner un rombo de 9 líneas.

/*  let datoCorrecto = false;
let datoBruto = 0;
while (!datoCorrecto){
    datoBruto = prompt("Introduce un numero mayor que cero e impar");
    if (datoBruto > 0 && datoBruto % 2 === 1){
        datoCorrecto = true;
    }else{
        alert("Introduce un dato correcto");
    }
}
    let dato = parseInt(datoBruto);
    let centroRombo = (dato + 1)/2; 
for (let i = 0; i < centroRombo; i++) {
    let fila = "";
    for (let j = 1; j < dato + 1; j++) {
        if (centroRombo - (i + 1) >= j || centroRombo + (i + 1) <= j){
            fila = fila + " ";
        }else{
            fila = fila + "*";
        }
    }
    console.log(fila);
}
    let centroRomboP = (dato -1)/2;
    let datoPar = dato-1;
for (let i = 0; i < centroRomboP; i++) {
    let fila = " ";
    for (let j = 1; j < datoPar; j++) {
        if (i + 1 > j || (datoPar - i ) <= j){
            fila = fila + " ";
        }else{
            fila = fila + "*";
        }
    }
    console.log(fila);
    
}  */

//EJ 19 Adapta el código anterior para que el rombo ahora este hueco.

/* let datoCorrecto = false;
let datoBruto = 0;
while (!datoCorrecto){
    datoBruto = prompt("Introduce un numero mayor que cero e impar");
    if (datoBruto > 0 && datoBruto % 2 === 1){
        datoCorrecto = true;
    }else{
        alert("Introduce un dato correcto");
    }
}
    let dato = parseInt(datoBruto);
    let centroRombo = (dato + 1)/2; 
for (let i = 0; i < centroRombo; i++) {
    let fila = "";
    for (let j = 1; j < dato + 1; j++) {
        if (centroRombo - (i + 1) == j - 1 || centroRombo + (i + 1) == j + 1){
            fila = fila + "*";
        }else{
            fila = fila + " ";
        }
    }
    console.log(fila);
}
    let centroRomboP = (dato -1)/2;
    let datoPar = dato-1;
for (let i = 0; i < centroRomboP; i++) {
    let fila = " ";
    for (let j = 1; j < datoPar; j++) {
        if (i + 1 == j || (datoPar - i ) == j + 1){
            fila = fila + "*";
        }else{
            fila = fila + " ";
        }
    }
    console.log(fila);
    
} */

//EJ 20 
//Escribe tres funciones suma que acepte un número indeterminado de argumentos y devuelva la suma de todos ellos. Debes evitar que la función devuelva “undefined” si no se le pasa ningún argumento, en cuyo caso el valor que devuelva tiene que ser 0. Debes escribir cada versión de la función  de las tres formas que hemos visto.
//suma1 , declaración tradicional de una función
//suma2, función como expresión.
//suma3, función flecha.
 
// Ej 21 Escribe una función denominada “operacionesEncadenadas” con los siguientes argumentos
//Dos valores que actuarán de datos para las operaciones.
//El tercero y cuarto dos funciones callback que definiremos aparte. La primera devolverá la suma de los dos datos. La segunda el producto
//El último argumento será una función callback que pasaremos en la llamada a la función  como función flecha con un mensaje por pantalla al usuario

/* function operacionesEncadenadas(dato1,dato2,suma,mult){
    return (suma(dato1,dato2) + " y " + mult(dato1,dato2));
}
 
const suma = (dato1,dato2) => dato1+dato2;  

const mult = (dato1,dato2) => dato1*dato2;

let texto = operacionesEncadenadas(6,6,suma,mult,() => console.log("a")) 

console.log(texto);
*/
 
//Ej 22 Crea una función que sume todos los elementos de un array numérico.(Sin recorrer el Array)
/* 
const sumaArray = (lista)=>lista.reduce((acumulador,valor) => acumulador + valor);

console.log(sumaArray([1,2,3,4,5,6,7])); */

//EJ 27 Define una función a la que le pasaremos un número y el tipo de redondeo a realizar. La función devolverá el resultado del redondeo y además mostrará el valor del redondeo en el documento junto a un mensaje indicando el tipo de redondeo. 

/* function redondeo(redondeo,numero){
    let dato;
    switch(redondeo){
        case"redondeo":
        dato = Math.round(numero);
        break;
        case"superior":
        dato = Math.ceil(numero);
        break;
        case"inferior":
        dato = Math.floor(numero);
        break;
        case"trunca":
        dato = Math.trunc(numero);
        break;
        default:
    }   
    document.write(redondeo);
    document.write(" " + dato);
}
let red = prompt("Introduce un tipo de redondeo");
let numero = prompt("Introduce un valor decimal");

redondeo(red,numero);
 */
//EJ 28 Define una función a la que le pasaremos dos enteros (limite inferior y límite superior) y la función nos devolverá una entero aleatorio en el rango [limiteInferior,limiteSuperior). Además mostrará en el documento un mensaje indicando el número aleatorio y el rango en el que se encuentra.

/* function limites(limiteInferior,limiteSuperior){
   let limiteTemporal = parseInt(limiteSuperior) - parseInt(limiteInferior);
    let dato = (Math.random()*limiteTemporal);
    return (dato + parseInt(limiteInferior));
}
let superior = prompt("Introduce el limite superior");
let inferior = prompt("Introduce el limite inferior");
document.writeln("Numero generado: " + limites(inferior,superior))
document.write("Limites: " + inferior + " y " + superior); */

//EJ 29 Define una función a la que le pasaremos un ángulo y la función trigonométrica a aplicar y nos devolverá el resultado de aplicar la función trigonométrica  y mostrará en el documento la operación aplicada con el resultad

/* let angulo = prompt("Introduce un angulo en radianes(sin PI)");
let operacion = prompt("Introduce una operacion trigonométrica");

function trigonometrica(ang,op){
    switch(op){  
            case"seno":
            dato = Math.sin(ang * Math.PI);
            break;
            case"coseno":
            dato = Math.cos(ang * Math.PI);
            break;
            default:
    }   
    return dato;
}

document.write("Operacion: " + operacion + " Resultado : " + trigonometrica(angulo,operacion));

 */

//EJ 30 Define una función que muestre la fecha actual en diferentes formatos
//5/10/2021
//Wed Oct 06 2021.
//Wed, 06 Oct 2021 15:54:47 GMT

/* let date = new Date("2021-10-06T15:54:47.817Z");

console.log(date.toLocaleString());
console.log(date.toDateString());
console.log(date.toUTCString()); */

//EJ 31 Define una función que muestre la hora actual en diferentes formatos
//14:35:07 (hora detallada con minutos y segundos)
//02:35 PM o 02:35 AM (hora con minutos y AM o PM según sea antes o después del medio día).
/* 
let date = new Date(Date.now());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleTimeString("en-US")); */

//EJ 32 Define una función que muestre el número de días que  quedan desde hoy hasta el fin de curso (el 23 de junio).

/* let dateFin = new Date("2026-06-23T23:59:59.817Z");
let date = new Date();

let tiempo = dateFin - date;

console.log(tiempo/1000/3600/24); */

//Ej 33  Crea un programa que pida por parámetro tu cumpleaños (no hace falta el año) y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el año 2100. Por ejemplo, introducir el 05/23 para el día 23 de mayo.

/* let dia = prompt("Introduce tu dia cumpleaños");
let mes = prompt("Introduce tu mes cumpleaños");

let date = new Date(2025,mes,dia);

for (let index = date.getFullYear(); index<2100; index++) {
    date.setFullYear(index);
    if (date.getDay() === 0) {
        //debugger;
        console.log(date.getFullYear());
    }
} */
//EJ 41 Crea un programa que pida el nombre a usuario la primera vez que visita el documento, si ya la ha visitado que le muestre un mensaje “Hola nombreUsuario, otra vez por aquí”.  Si no la ha visitado que le de la bienvenida y almacene su nombre en la cookie. Utiliza una cookie “usuario”.La fecha de expiración de la cookie es de un año o 365 días.
//Observación: este ejercicio NO funciona ejecutado en local, lo tienes que probar en un entorno web real o con una extensión de VS Code  tipo Live Server

if (document.cookie === ""){
    let n = prompt("Introduce tu nombre de ususario");
    setCookie(n,0,365);
}
let nom = document.cookie;
document.writeln("Hola " +nom+ " Bienvenido");

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}