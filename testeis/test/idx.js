document.querySelector("#CajaEX").addEventListener("click", CambiaColorEX);
document.querySelector("#CajaMID").addEventListener("click", CambiaColorMID);
document.querySelector("#CajaIN").addEventListener("click", CambiaColorIN);


function CambiaColorEX(e){
    let color = Math.floor((Math.random()* 999999));
    let colorStr = color.toString();
    document.querySelector("#CajaEX").style.background = "#" + colorStr;
}

function CambiaColorMID(e){
    let color = Math.floor((Math.random()* 999999));
    let colorStr = color.toString();
    document.querySelector("#CajaMID").style.background = "#" + colorStr;
    e.stopPropagation();
}

function CambiaColorIN(event){
    let color = Math.floor((Math.random()* 999999));
    let colorStr = color.toString();
    document.querySelector("#CajaIN").style.background = "#" + colorStr;
    event.stopPropagation();  
}
