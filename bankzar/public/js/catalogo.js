document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("productos-container");
      container.innerHTML = ""; // Limpiar el contenedor antes de insertar productos

      data.forEach((producto) => {
        const item = document.createElement("div");
        item.classList.add("contenedor_item");

        item.innerHTML = `
                    <div class="carousel">
                        <div class="carousel-inner">
                            ${producto.imagenes
                              .split(",")
                              .map(
                                (img) => `
                                <div class="carousel-item">
                                    <img src="http://127.0.0.1:5500/bankzar/backend/${img}" alt="Imagen del producto">
                                    
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                        <button class="carousel-control prev">&#10094;</button>
                        <button class="carousel-control next">&#10095;</button>
                    </div>
                    <div class="contenedor_caracteristicas">
                        <p class="nombreProducto">${producto.nombre}</p>
                        <p class="talla">Talla: ${producto.talla}</p>
                        <p class="precio">$${producto.precio}</p>
                        <button class="custom Adquirir">Preguntar Disponibilidad</button>
                        <button class="custom2 instagram">Ver en Instagram</button>
                    </div>
                `;

        container.appendChild(item);
      });
    })
    .catch((error) => console.error("Error al obtener productos:", error));
});
