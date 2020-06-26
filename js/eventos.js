function campoRequerido(input) {
    //let elemento = document.getElementById('nombre');
    if (input.value == "") {
        //si esta vacio
        input.className = "form-control is-invalid";
        return false;
    } else {
        //tiene datos
        input.className = "form-control is-valid";
        return true;
    }
}

function validarMail(input) {
    //emilse@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarTelefono(input) {
    let quitarEspacio = / /;
    if (input.value != "" && !isNaN(input.value) && !quitarEspacio.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarConsulta(texto) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}

let checkTerminos = document.getElementById('chkTermino');
//agregar eventos
checkTerminos.addEventListener("change", validarCheck)

function validarCheck() {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    //evitar que recargue la página (event.preventDefault)
    event.preventDefault();
    console.log("Dentro de validar general");

    if (campoRequerido(document.getElementById("nombre")) && validarMail(document.getElementById("email")) && validarTelefono(document.getElementById("telefono")) && validarConsulta(document.getElementById("consulta")) && validarCheck()
    ) {
        enviarMail();
    } else {
        alert("ocurrió un error");
    }
}

function enviarMail() {
    let template_params = {
        from_name: document.getElementById("nombre").value,
        message_html: `Mensaje: ${document.getElementById("consulta").value} - Email: ${document.getElementById("email").value}`
    };

    let service_id = "default_service";
    let template_id = "template_WsYqydVn";
    emailjs.send(service_id, template_id, template_params);
}