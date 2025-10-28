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

    addInvitados(nom,email){
        this.invitados.push(new Invitado(nom,email));
    }
    addAlerta(fecha,fechaAv,mensage,ID){
        this.alertas.push(Alerta(fecha,fechaAv,mensage,ID));
    }
}
class Invitado{
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
    }
}
class Alerta{
    constructor(fecha,fechaAv,mensage,ID){
        this.fecha = fecha;
        this.fechaAv = fechaAv;
        this.mensage = mensage;
        this.ID = ID;
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
    let texto = "MENU \n 1-Crear Evento \n 2-Borrar Evento \n 3-Modificar Evento \n 4-Desactivar alertas \n 5-Borrar eventos pasados \n 6-Mostrar sin guardar  \n 7- Mostrar y Guardad"
    do{
        let dato = alert(texto)

        switch (dato){
            case 1:
                crearEvento();
                menu();
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            default:
                alert("Introduce un número válido")
        }
    }while (dato <= 0 || dato >= 8)
}
function crearEvento(){
    let nombre = alert("Introduce el nombre del evento");
    let fecha = alert("Introduce la fecha del evento (AAAA-MM-DDTHH:MM)");
    let lugar = alert("Introduce la ubicación de evento");

    let dato = alert("¿Queres añadir algun Invitado? (y/n)")
    if (dato === y) bucleInvitados();



    let evento = new Evento(nombre,fecha,lugar)
}
function bucleInvitados(){
    do{
        let nom = alert("Introduce el nombre del Invitado");
        do {
            let email = alert("Introduce el email de Invitado");
            let paso = false;
            let emailInvitado = toString(email);
            if (emailInvitado.includes("@")) paso = true;
        }while(paso);
        const []
    }
}
