class Evento{
    nombre;
    fecha;
    lugar;
    invitados;
    alertas;

    constructor(nombre, fecha, lugar, invitados = [], alertas = []){
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.invitados = invitados;
        this.alertas = alertas;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nom){
        this.nombre = nom;
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fech){
        this.fecha = fech;
    }
    getUbicacion(){
        return this.lugar;
    }
    setUbicacion(ubi){
        this.lugar = ubi;
    }
    getAlertas(){
        return this.alertas;
    }

    addInvitados(nom,email){
        this.invitados.push(new Invitado(nom,email));
    }
    addAlerta(fecha,fechaAv,mensage,ID){
        this.alertas.push(new Alerta(fecha,fechaAv,mensage,ID));
    }
}
class Invitado{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}
class Alerta{
    constructor(fecha,mensage,timerID = setTimeout(handler)){
        this.fecha = fecha;
        this.mensage = mensage;
        this.timerID = timerID
    }
}

/* 
const agendaLS = JSON.parse(localStorage.getItem("agenda")) || [];
console.log(agendaLS);

const agenda = [...agendaLS].map(pasoConstructor)
function pasoConstructor(item){
    return new Evento(item);
} 

/* const e1 = new Evento("nom1","ea1","aqui1","el1","hola1");
const e2 = new Evento("nom2","ea2","aqui2","el2","hola2"); 
localStorage.setItem("agenda", JSON.stringify(agenda)); */
function menu(){
    let texto = "MENU \n 1-Crear Evento \n 2-Borrar Evento \n 3-Modificar Evento \n 4-Desactivar alertas \n 5-Borrar eventos pasados \n 6-Mostrar sin Guardar  \n 7- Mostrar y Guardar"
    let datoNum;
    do{
        let dato = prompt(texto);
        datoNum = parseInt(dato);

        switch (datoNum){
            case 1:
                crearEvento();
                menu();
                break;
            case 2:
                borrarEvento();
                menu();
                break;
            case 3:
                let nom = ("Introduce el nombre del evento a modificar");
                let index = listaEventos.findIndex(e => e.getNombre === nom);
                modificarEvento(listaEventos.at(index));
                break;
            case 4:

                break;
            case 5:
                borrarPasados();
                break;
            case 6:
                mostrarEventos();

                break;
            case 7:

                break;
            default:
                alert("Introduce un número válido")
        }
    }while (datoNum <= 0 || datoNum >= 8);
}
// CASE 1
function crearEvento(){
    let nombre = prompt("Introduce el nombre del evento");
    let fecha = prompt("Introduce la fecha del evento (AAAA-MM-DDTHH:MM)");
    let lugar = prompt("Introduce la ubicación de evento");

    let evento = new Evento(nombre,fecha,lugar);

    let datoI = prompt("¿Queres añadir algun Invitado? (y/n)") 
    if (datoI == "y") {bucleInvitados(evento)};

    let datoA = prompt("¿Queres añadir alguna Alerta? (y/n)") 
    if (datoA == "y") {bucleAlertas(evento)};

    listaEventos.push(evento);
}
function bucleInvitados(evento){
    let dato
    do{
        let nom = prompt("Introduce el nombre del Invitado");
        let paso = false;
        let email;
        do {
            email = prompt("Introduce el email de Invitado");  
        }while(!email.includes("@"));
        evento.addInvitados(nom,email);
        dato = prompt("¿Queres añadir algun Invitado más? (y/n)")
    }while((dato === "y"));
}
function bucleAlertas(evento){
    let dato
    do{
        let fecha = prompt("Introduce la fecha de la Alerta(AAAA-MM-DDTHH:MM)");
        let mensage = prompt("Introduce el mensage de la Alerta");
        
        evento.addAlerta(fecha,mensage);
        dato = prompt("¿Queres añadir algun Invitado más? (y/n)")
    }while((dato === "y"));
}
//CASE 2
function borrarEvento(){
    let nom = ("Introduce el nombre del evento a borrar");
    let index = listaEventos.findIndex(e => e.getNombre === nom);
    listaEventos.splice(index,1);
}
//CASE 3
function modificarEvento(evento){
    let nom = prompt("Introduce el nuevo nombre del evento");
    evento.setNombre(nom);
    let fech = prompt("Introduce la nueva fecha");
    evento.setNombre(nom);
    let ubi = prompt("Introduce la nueva ubicación");
    evento.setNombre(nom);

    let datoI = prompt("¿Queres añadir algun Invitado? (y/n)") 
    if (datoI == "y") {bucleInvitados(evento)};

    let datoA = prompt("¿Queres añadir alguna Alerta? (y/n)") 
    if (datoA == "y") {bucleAlertas(evento)};
}
//CASE 5
function borrarPasados(){
    listaEventos.forEach(element => {
        if(element.getFecha < Date.now()){
            let index = listaEventos.findIndex(e => e.getNombre === element.getNombre);
            listaEventos.splice(index,1);
        }
    });
} 
//CASE 6
mostrarEventos(){
    listaEventos.forEach(element =>{
        document.body.innerHTML =
        `
        

        `
    })
}
const listaEventos = []
menu();
//2025-10-30-T12:00