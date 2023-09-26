function jahirR() {
    //alert ("función de ricardo ejecutándose!")
    /* DIFERENCIA ENTRE var - let - const */
    /* foreach - map - filter - find */
    /* javaScript Vanilla */
    //var nombreCliente = document.getElementById("nombre_cliente").value;
    /* jQuery */
    // Define un objeto que contiene los nombres de los campos y los mensajes de error.
    var nombreCliente = $("#nombre_cliente").val();
    /*if (nombreCliente === "") {
      Swal.fire("Debe ingresar el nombre del cliente.", "", "error");
      return;
    }*/
    var apellidoCliente = $("#apellido_cliente").val();
    /*if (apellidoCliente === "") {
      Swal.fire("Debe ingresar el apellido del cliente.", "", "error");
      return;
    }*/
    var fechaNacimiento = $("#fecha_nacimiento").val();
    /*if (fechaNacimiento === "") {
      Swal.fire("Debe ingresar fecha de nacimiento.", "", "error");
      return;
    }*/
    var Direccion = $("#direccion").val();
    /*if (Direccion === "") {
      Swal.fire("Debe ingresar la direccion.", "", "error");
      return;
    }*/
    var correoElectronico = $("#correo_electronico").val();
    /*if (correoElectronico === "") {
      Swal.fire("Debe ingresar el correo electronico.", "", "error");
      return;
    }*/
    var Telefono = $("#telefono").val();
    /*if (Telefono === "") {
      Swal.fire("Debe ingresar el telefono.", "", "error");
      return;
    }*/
    var Ciudad = $("#ciudad").val();
    /*if (Ciudad === "") {
      Swal.fire("Debe ingresar la ciudad.", "", "error");
      return;
    }*/
    var Pais = $("#pais").val();
    /*if (Pais === "") {
      Swal.fire("Debe ingresar el nombre del cliente.", "", "error");
      return;
    }*/
    var Profesion = $("#profesion").val();
    /*if (Profesion === "") {
      Swal.fire("Debe ingresar el nombre del cliente.", "", "error");
      return;
    
    }*/
  
    var Documento = $("#nDocumento").val();
  
    /* ALTERNATIVA */
  
    var campos = [
      { campo: "#nombre_cliente", mensaje: "nombre del cliente" },
      { campo: "#apellido_cliente", mensaje: "apellido del cliente" },
      { campo: "#fecha_nacimiento", mensaje: "fecha de nacimiento" },
      { campo: "#direccion", mensaje: "dirección" },
      { campo: "#correo_electronico", mensaje: "correo electrónico" },
      { campo: "#telefono", mensaje: "teléfono" },
      { campo: "#ciudad", mensaje: "ciudad" },
      { campo: "#pais", mensaje: "país" },
      { campo: "#profesion", mensaje: "profesión" },
      { campo: "#nDocumento", mensaje: "Numero de Documento"}
    ];
    //console.log(campos.length)
    var datosCompletos = true;
    
    for (var i = 0; i < campos.length; i++) {
      var valor = $(campos[i].campo).val();
      if (valor === "") {
        Swal.fire("Debe ingresar " + campos[i].mensaje + ".", "", "error");
        datosCompletos = false;
        break;
      }
    }
    
    if (datosCompletos) {
     
      Swal.fire(
        "Datos guardados con éxito!",
        "Se han guardado los datos correctamente",
        "success"
      );
      
      /* CREAR OBJETO */
      let datos = {
        nombreCliente,
        apellidoCliente,
        fechaNacimiento,
        Direccion,
        correoElectronico,
        Telefono,
        Ciudad,
        Pais,
        Profesion,
        Documento
      };
      console.log("🚀 ~ file: jahirR.js:95 ~ jahirR ~ datos:", datos)
    }  
  
    /*  *
    console.log("🚀 ~ file: ricardo.js:21 ~ datos:", datos);
    Swal.fire(
      "Datos guardados con éxito!",
      "Se han guardado los datos correctamente",
      "success"
    );*/
  }
  function mostrarAlerta ( valor, titulo, texto, icono){
  
  }
  
  function limpiarCamposCliente(){
    campos
  }