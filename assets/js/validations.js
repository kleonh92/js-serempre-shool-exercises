document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", validarFormulario);
});

function validarFormulario(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let tel = document.getElementById("phone-number").value;
  let email = document.getElementById("email").value;
  let pais = document.getElementById("country").selectedIndex;

  if (name == null || name.length == 0 || /^\s+$/.test(name)) {
    alert("Ingresa un nombre válido");
    document.getElementById("name").focus();
    return false;
  }

  if (tel == null || tel.length == 0 || !/^\d{10}$/.test(tel)) {
    alert("Ingresa un número de teléfono válido, minimo 10 digitos");
    document.getElementById("phone-number").focus();
    return false;
  }

  if (
    email == null ||
    email.length == 0 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    alert("Ingresa un email válido");
    document.getElementById("email").focus();
    return false;
  }

  if (pais == null || pais == 0) {
    alert("Debes seleccionar un país del listado");
    document.getElementById("country").focus;
    return false;
  } else {
    let paisMensaje = document.getElementById("country");
    let seleccion = paisMensaje.options[paisMensaje.selectedIndex].text;

    setTimeout(() => {
      alert(`Se han enviado los datos satisfactoriamente a ${seleccion}`);
      this.submit();
    }, 1000);
  }
}
