// lear
// Manage Landing Page

window.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const closeLinksBtn = document.querySelector(".close-links");
  const openLinksBtn = document.querySelector(".open-links");
  const links = document.querySelector(".links");

  // Move Carousel
  function MoveCarousel(e) {
    carousel.scrollLeft -= e.movementX;
  }

  // Show Links
  openLinksBtn.addEventListener("click", () => {
    links.style.right = "0";
  });

  // Hide Links
  closeLinksBtn.addEventListener("click", () => {
    links.style.right = "-160px";
  });

  carousel.addEventListener("mousemove", MoveCarousel);
});
