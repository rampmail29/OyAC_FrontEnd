function jahirR() {
    var nombreCliente = document.getElementById("nombre_cliente").value;
    if (nombreCliente === "") {
        Swal.fire("Debe ingresar el nombre del cliente.", "", "error");
        return;
    }

    var numeroDocumento = document.getElementById("input_numero_documento").value;
    if (numeroDocumento === "") {
        Swal.fire("Debe ingresar el número de documento.", "", "error");
        return;
    }

    var fecha = document.getElementById("input_fecha").value;
    if (fecha === "") {
        Swal.fire("Debe ingresar la fecha.", "", "error");
        return;
    }

    var sectorSalud = document.getElementById("input_sector_salud").value;
    if (sectorSalud === "") {
        Swal.fire("Debe ingresar el sector de salud.", "", "error");
        return;
    }

    var comentarios = document.getElementById("textarea_comentarios_crear_lote").value;

    var datosSalud = {
        nombreCliente,
        numeroDocumento,
        fecha,
        sectorSalud,
        comentarios,
        datoSalud1: "",
        datoSalud2: "",
        datoSalud3: "",
        datoSalud4: "",
        datoSalud5: "",
        datoSalud6: "",
        datoSalud7: "",
        datoSalud8: "",
        datoSalud9: "",
        datoSalud10: ""
    };

    console.log("Datos de Salud guardados:");
    console.log("Nombre del Cliente: " + datosSalud.nombreCliente);
    console.log("Número de Documento: " + datosSalud.numeroDocumento);
    console.log("Fecha: " + datosSalud.fecha);
    console.log("Sector de Salud: " + datosSalud.sectorSalud);
    console.log("Comentarios: " + datosSalud.comentarios);
    console.log("Dato de Salud 1: " + datosSalud.datoSalud1);
    console.log("Dato de Salud 2: " + datosSalud.datoSalud2);
    console.log("Dato de Salud 3: " + datosSalud.datoSalud3);
    console.log("Dato de Salud 4: " + datosSalud.datoSalud4);
    console.log("Dato de Salud 5: " + datosSalud.datoSalud5);
    console.log("Dato de Salud 6: " + datosSalud.datoSalud6);
    console.log("Dato de Salud 7: " + datosSalud.datoSalud7);
    console.log("Dato de Salud 8: " + datosSalud.datoSalud8);
    console.log("Dato de Salud 9: " + datosSalud.datoSalud9);
    console.log("Dato de Salud 10: " + datosSalud.datoSalud10);

    Swal.fire(
        "Datos de Salud guardados con éxito!",
        "Se han guardado los datos de salud correctamente",
        "success"
    );
}
