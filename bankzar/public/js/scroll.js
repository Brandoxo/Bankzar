window.onscroll = function () {
  const header = document.querySelector("header");
  const logo = document.querySelector("#logo");
  const titulo = document.querySelector("#titulo");

  // Cuando el scroll pase de 100px, cambiar el estilo del header
  if (window.scrollY > 100) {
    header.classList.add("sticky-header", "smaller-header");
  } else {
    header.classList.remove("sticky-header", "smaller-header");
  }
};
