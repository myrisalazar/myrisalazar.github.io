function campoRequerido(input) {
    if (input.value == "") {
        //si el campo esta vacio
        input.className = "form-control is-invalid";
    } else {
        //si esta completo
        input.className = "form-control is-valid";
    }
}

function validarTelefono(input) {
    let quitarEspacio = / /;
    if (input.value != "" && !isNaN(input.value) && !quitarEspacio.test(input.value)) {
        input.className = "form-control is-valid";
    } else {
        input.className = "form-control is-invalid";
    }
}

function validarMail(input) {
    //salazarmyriarg@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
    } else {
        input.className = "form-control is-invalid";
    }
}

function validarPais(texto) {
    if (texto.value == "") {
        //si el campo esta vacio
        texto.className = "form-control is-invalid";
    } else {
        //si esta completo
        texto.className = "form-control is-valid";
    }
}

function validarConsulta(consult) {
    if (consult.value != "" && consult.value.length >= 15) {
        consult.className = "form-control is-valid";
    } else {
        consult.className = "form-control is-invalid";
    }
}

function validarCompleto(event) {
    event.preventDefault();

    if (campoRequerido(document.getElementById("nombre")) && validarTelefono(document.getElementById("numero")) && validarMail(document.getElementById("email")) && validarPais(document.getElementById("pais")) && validarConsulta(document.getElementById("consulta"))
    ) {
        enviarMail(this);
    } else {
        alert("No pudimos enviar tu correo, hay un error");
    }

}

function enviarMail() {
    let template_params = {
        from_name: document.getElementById("nombre").value,
        message_html: `Mensaje: ${document.getElementById("consulta").value} - Email ${document.getElementById("email").value}`
    }

    let service_id = "default_service";
    let template_id = "template_WsYqydVn";
    emailjs.send(service_id, template_id, template_params);
}