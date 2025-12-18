document.addEventListener("DOMContentLoaded", validacion);

function validacion() {
    document.querySelector("form").addEventListener("submit", cancelarEnvio);
    document.querySelectorAll("input").forEach((element)=>element.addEventListener("focus", limpiarError))

    document.querySelector("[name=nombre]").addEventListener("blur", validarNombre);
    document.querySelector("[name=apellidos]").addEventListener("blur", validarApellido);
}
function cancelarEnvio(e){
    e.preventDefault();
}
function limpiarError(e) {
    if (e.target.classList.contains("Error")){
        e.target.value = "";
        e.target.classList.remove("Error");
        e.target.innerHTML = "";
    }
}
function validarNombre(eventoNombre) {
    let valid = true;
    if (eventoNombre.target.value === "") {
        document.querySelector("[name=nombreError]").innerHTML = "El campo no puede quedar Vacio.";
        document.querySelector("[name=nombre]").value = "*";
        document.querySelector("[name=nombre]").classList.add("Error");
        valid = false;
    }
    if (eventoNombre.target.value.length < 3 && (valid)) {
        document.querySelector("[name=nombreError]").innerHTML = "El campo debe tener mas de 3 carácteres.";
        document.querySelector("[name=nombre]").classList.add("Error");
        valid = false;
    }
    if (valid){
        let nombre = document.querySelector("[name=nombre]").value.toLowerCase();
        let letra = nombre.charAt(0).toUpperCase();
        let nombreCorregido = nombre.replace(nombre.charAt(0),letra)
        document.querySelector("[name=nombre]").value = nombreCorregido;
    }
}
function validarApellido(eventoApellido){
    let valid = true;
    const inputApellidos=document.querySelector("[name=apellidosError]");
    if(eventoApellido.target.value === "") {
        document.querySelector("[name=apellidosError]").innerHTML = "El campo no puede quedar Vacio.";
        document.querySelector("[name=apellidos]").value = "*";
        document.querySelector("[name=apellidos]").classList.add("Error");
        valid = false;
    }
    if (eventoApellido.target.value.length < 3 && (valid)) {
        inputApellidos.innerHTML = "El campo debe tener mas de 3 carácteres.";
        document.querySelector("[name=apellidos]").classList.add("Error");
        valid = false;
    }
    if (valid){
        let apellido = document.querySelector("[name=apellidos]").value.toLowerCase();
        let letra = apellido.charAt(0).toUpperCase();
        let apellidoCorregido = apellido.replace(apellido.charAt(0),letra)
        document.querySelector("[name=apellidos]").value = apellidoCorregido;
    }
}
