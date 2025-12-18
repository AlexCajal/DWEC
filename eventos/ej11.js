
document.addEventListener("DOMContentLoaded", ej11);
function ej11(){ 
    
    let elementP = document.querySelectorAll("p");
    let firstP = document.querySelector("p").getHTML();
    let enlaces = document.querySelectorAll("a");

    let p20 = firstP.slice(0,21);
enlaces.forEach(e => {

    if (e.getAttribute("href") == "https://www.cpifppiramide.com/"){
        num++;
    }
});

    console.log(elementP.length);
    console.log(p20);
    console.log(enlaces.length);
    console.log(enlaces.item(2).getAttribute("href"));
    console.log(enlaces.item(4).getAttribute("href"));

    
}