function iniciarCarrusel(carousel) {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const prevButton = carousel.querySelector(".carousel-control.prev");
  const nextButton = carousel.querySelector(".carousel-control.next");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselInner.children.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < carouselInner.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  setInterval(() => {
    if (currentIndex < carouselInner.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 3000);
}

function iniciarCarrusel(carousel) {
  const carouselInner = carousel.querySelector(".carousel-inner");
  const prevButton = carousel.querySelector(".carousel-control.prev");
  const nextButton = carousel.querySelector(".carousel-control.next");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselInner.children.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < carouselInner.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  setInterval(() => {
    if (currentIndex < carouselInner.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 3000);
}

document.querySelectorAll(".carousel").forEach((carousel) => {
  iniciarCarrusel(carousel);
});
