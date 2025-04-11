document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe
  const boton = document.querySelector("button[type='submit']");
  boton.innerText = "Enviando...";
  boton.disabled = true;

  // Simula un envío con un retraso de 2 segundos
  const email = document.getElementById("email").value;
  const mensaje = document.createElement("p");
  mensaje.className = "text-center mt-2";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    setTimeout(() => {
      boton.innerText = "INSTRUCCIONES ENVIADAS";
      boton.style.backgroundColor = "gray";
      mensaje.innerText = "¡Correo enviado exitosamente!";
      mensaje.style.color = "green";
      mensaje.style.fontSize = "large";
      mensaje.style.fontWeight = "bold";
      document.querySelector(".tito").append(mensaje); // Añadir mensaje después de la simulación
    }, 2000);
  } else {
    mensaje.innerText = "ERROR. Introduzca un correo válido";
    mensaje.style.color = "red";
    document.querySelector(".tito").append(mensaje); // Añadir mensaje si el correo es inválido
    boton.innerText = "Enviar"; // Restaurar el texto del botón
    boton.disabled = false; // Habilitar el botón nuevamente
  }

  const mensajeAnterior = document.querySelector(
    ".recoveryPassword p.text-center"
  );
});
