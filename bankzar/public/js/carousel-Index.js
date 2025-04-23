document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/productos")
    .then((respuesta) => respuesta.json)
    .then((data) => {
      const container = document.getElementById("preview");
      container.classList.add(
        "grid", // Activa Grid
        "grid-cols-2", // 2 columnas en móviles
        "md:grid-cols-3", // 3 columnas en tablets
        "lg:grid-cols-4", // 4 columnas en desktop
        "xl:grid-cols-5",
        "2xl:grid-cols-7",
        "gap-4", // Espacio pequeño entre elementos para móviles
        "md:gap-6", // Centra los elementos horizontalmente
        "lg:gap-10",
        "bg-gradient-to-b",
        "from-gray-50",
        "to-gray-500"
      );
      container.innerHTML = ""; // Limpiar el contenedor antes de insertar productos

      data.foreach((producto) => {
        const item = document.createElement("div");
        item.classList.add(
          "contenedor_item",
          "bg-white",
          "p-2", // Padding reducido para móviles
          "md:p-4", // Padding normal para pantallas mayores

          "rounded-xl",
          "shadow-md",
          "hover:shadow-2xl",
          "transition-shadow",
          "tansition-all",
          "duration-300",
          "shadow-orange-900"
        );
      });
    });
});
