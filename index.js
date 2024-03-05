/** @format */
const hamburger = document.querySelector(".burger-menu");
const burgerNav = document.querySelector(".burger-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  burgerNav.classList.toggle("active");
});
