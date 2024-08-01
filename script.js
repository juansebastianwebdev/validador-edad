function registrarse() {
    let nombre = $("#nombre").val();
    let edad = parseInt($("#edad").val());
    let alerta = $(".modal-body");

    if(nombre === '' || isNaN(edad)) {
        alerta.html("<p>Por favor, ingrese su nombre y edad.</p>")
    } else {
        if(edad < 18) {
            alerta.html("<p>Debes ser mayor de 18 años para registrarte.</p>");
        } else {
            alerta.html("<p>Registro exitoso.</p>");
        }
    

        $("#nombre").val('');
        $("#edad").val('');

        $("#staticBackdrop").modal('show');
    }
}