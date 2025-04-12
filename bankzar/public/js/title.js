document.addEventListener("DOMContentLoaded", function () {
  function changeTitle() {
    const title = document.getElementById("title");

    // Listas de colores suaves y agradables
    const colors = ["#FF6F61", "#6B8E23", "#FF8C00", "#20B2AA", "#D2691E"];

    // Fuentes modernas y juveniles
    const fonts = [
      "'Poppins', sans-serif",
      "'Roboto', sans-serif",
      "'Quicksand', sans-serif",
      "'Lora', serif",
    ];

    // Tamaños moderados (no muy pequeños ni grandes)
    const sizes = ["24px", "28px", "30px", "32px", "34px"];

    // Cambiar propiedades aleatorias
    title.style.color = colors[Math.floor(Math.random() * colors.length)];
    title.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    title.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
  }

  // Cambiar el título cada segundo
  setInterval(changeTitle, 1000);
});
