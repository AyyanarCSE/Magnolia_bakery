document.addEventListener("DOMContentLoaded", function () {

  // Swiper 1
  new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: "#slider-button-right",
      prevEl: "#slider-button-left"
    }
  });

  // Swiper 2
  new Swiper(".multiple-slide", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: {
      nextEl: "#slider-button-right",
      prevEl: "#slider-button-left"
    }
  });

  // Overlay close logic
  const closeBtn = document.querySelector("#button");
  const overlay = document.querySelector("#display");

  // Safe check (VERY IMPORTANT)
  if (closeBtn && overlay) {
    closeBtn.onclick = () => {
      overlay.style.display = "none";
    };
  }

});
