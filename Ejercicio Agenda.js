class Evento{
    constructor(nombre, fecha, lugar, invitados, alertas){
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }
}

const agendaLS = JSON.parse(localStorage.getItem("agenda")) || [];
console.log(agendaLS);

const agenda = [...agendaLS].map(pasoConstructor)
function pasoConstructor(item){
    return new Evento(item);
} 

/* const e1 = new Evento("nom1","ea1","aqui1","el1","hola1");
const e2 = new Evento("nom2","ea2","aqui2","el2","hola2"); */
localStorage.setItem("agenda", JSON.stringify(agenda));
function menu(){
    let dato = alert("MENU \n 1-Crear Evento \n 3- \n 4- \n 5-Borrar eventos pasados \n 6-Mostrar sin guardar  \n 7- Mostrar y Guardad");
}