//EJ1

/* document.addEventListener ("DOMContentLoaded", function (e) {
    console.log(e.type);
    console.log(e.event);
})

window.addEventListener ("load", function (e) {
    console.log(e.type);
    console.log(e.event);
})

window.addEventListener ("beforeunload", function (e) {
    console.log(e.type);
    console.log(e.event);
})
 */

//EJ2

/* document.addEventListener("DOMContentLoaded", funcionPos);

function funcionPos(){
    
    document.addEventListener("mousedown", (e) => {

        console.log(e.screenX + " " + e.screenY);

    });
}
 */
//EJ 3

/* document.addEventListener("DOMContentLoaded", funcionPos);

function funcionPos(){
    
    document.addEventListener("mousemove", (e) => {

        cdocument.body.innerHTML =(e.screenX + " " + e.screenY);

    });
} */

//EJ4

/* document.addEventListener("DOMContentLoaded", funcionPos);

function funcionPos(){
    document.addEventListener("keyup", (e) => {
        let combinacion = e.key;
        if (e.altKey) combinacion = combinacion + " + alt";
        if (e.ctrlKey) combinacion = combinacion + " + ctrl";
        alert(combinacion);
    });
} */

//EJ5

document.addEventListener("DOMContentLoaded", funcionResize);

function funcionResize(){
    document.addEventListener("resize", (e) => {
        console.log(screen.height + " " + screen.width);
    });
} 
    
