
function jp() {
   //alert ("función de ricardo ejecutándose!")
  /* DIFERENCIA ENTRE var - let - const */
  /* foreach - map - filter - find */
  //var nombreCliente = document.getElementById("nombre_cliente").value;
  var nombreCliente = $("#nombre_cliente").val();
  if (
    mostrarAlerta(
      nombreCliente,
      "¡¡Ups!!Parece que nombre cliente está vacío!",
      "Debe ingresar el nombre del cliente",
      "error"
    )
  ) {
    return;
  }

  //var numeroDocumento = document.getElementById("input_numero_documento").value;
  var numeroDocumento = $("#input_numero_documento").val();

  if (
    mostrarAlerta(
      numeroDocumento,
      "¡¡Ups!!Parece que el número de documento está vacío!",
      "Debe ingresar el número de documento del cliente",
      "warning"
    )
  ) {
    return;
  }

  //var fecha = document.getElementById("input_fecha").value;
  var fecha = $("#input_fecha").val();
  if (
    mostrarAlerta(
      fecha,
      "¡¡Ups!!Parece que la fecha está vacía!",
      "Debe ingresar la fecha",
      "info"
    )
  ) {
    return;
  }

  /* CREAR OBJETO */
  let datos = {
    nombreCliente,
    numeroDocumento,
    fecha,
    edad: 39,
    genero: "masculino",
  };

  console.log("🚀 ~ file: ricardo.js:21 ~ datos:", datos);
  Swal.fire(
    "Datos guardados con éxito!",
    "Se han guardado los datos correctamente",
    "success"
  );
}

function mostrarAlerta(valor, titulo, texto, icono) {
  if (valor === "") {
    Swal.fire({
      type: icono,
      title: titulo,
      text: texto,
    });
    return true;
  }
  false;
}







































    //alert ("función de ricardo ejecutándose!")
    /* DIFERENCIA ENTRE var - let - const */
    /* foreach - map - filter - find */
    /*var nombreCliente = document.getElementById("nombre_cliente").value;
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
    var fecha = document.getElementById("input_fecha").value;
    if (fecha === "") {
      Swal.fire("Debe ingresar la fecha.", "", "error");
      return;
    }
    /* CREAR OBJETO */
  /*
    let datos = {
      nombreCliente,
      numeroDocumento,
      fecha,
      edad: 39,
      genero: "masculino",
    };
    console.log("🚀 ~ file: ricardo.js:21 ~ datos:", datos);
    Swal.fire(
      "Datos guardados con éxito!",
      "Se han guardado los datos correctamente",
      "success"
    );
    */
  }
  