const URL_SERVER ="http://54.166.226.27:3000/tareas";
document.addEventListener("DOMContentLoaded", cargarTareas);

function cargarTareas(){
    fetch(URL_SERVER)
        .then(response => response.json())
        .then(data => pintarTareas(data));
}


function pintarTareas(tareas){
    const listaTareas = document.createElement("ol");
    document.body.append(listaTareas);

    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.nombre;
        li.setAttribute("id", tarea.id);
        listaTareas.append(li);
    });
}
