
function ricardo() {
  //alert ("función de ricardo ejecutándose!")
  /* DIFERENCIA ENTRE var - let - const */
  /* foreach - map - filter - find */
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

