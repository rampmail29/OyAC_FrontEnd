async function jahirR() {
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
  
   /* API WEB PARA ENVIAR DATOS AL BACKEND */
  const url = "http://localhost:4000/api/";
  const fetchConfig = {
    method: 'POST',
    cache: 'no-cache',
    headers:{
      'Content-Type':'aplication/json'
    },
    body:JSON.stringify(datos)
  };

  try {
    const rta = await fetch(url, fetchConfig);
    console.log("rta: ".rta);
    if (rta.status === 200) {
      Swal.fire(
        "Datos actualizados con éxito",
        "Se actualizaron los datos del afiliado",
        "success"
      );
    } else if (rta.status === 204) {
      Swal.fire(
        "No se actualizaron los datos del afiliado.",
        "Sin cambios en el registro del afiliado.",
        "info"
      );
    } else if (rta.status === 400) {
      const errorResponse = await rta.json();
      console.error(errorResponse.message);
      Swal.fire("Ya existe un afiliado con número de documento", "", "warning");
    } else {
      console.error("Error en la respuesta del servidor:", rta.status);
      Swal.fire("Error de respuesta del servidor.", "", "error");
    }
  } catch (error) {
    console.error("Error:", error);
    Swal.fire("Hubo un error en la solicitud.", "", "error");
  }
  }
  function mostrarAlerta ( valor, titulo, texto, icono){
  
  }
  
  function limpiarCamposCliente(){
    campos
  }