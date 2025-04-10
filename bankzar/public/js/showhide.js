function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("togglePassword");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "./images/icons/show.png"; // Cambia la imagen a "mostrar"
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "./images/icons/hide.png"; // Cambia la imagen a "ocultar"
  }
}
