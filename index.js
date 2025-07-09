document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: "#slider-button-right",
      prevEl: "#slider-button-left"
    }
  });

  new Swiper(".multiple-slide", {
    loop: true,
slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: {
      nextEl: "#slider-button-right",
      prevEl: "#slider-button-left"
    }
  });
// Get the close button and the overlay
const closeBtn = document.querySelector("#button");
  const overlay = document.querySelector("#display");

  // Hide the overlay when the close button is clicked
  closeBtn.onclick = () => {
    overlay.style.display = "none";

  };

});

// Get the close button and the overlay
const closeBtn = document.querySelector("#button");
  const overlay = document.querySelector("#display");

  // Hide the overlay when the close button is clicked
  closeBtn.onclick = () => {
    overlay.style.display = "none";

  };
