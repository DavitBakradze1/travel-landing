/** @format */
const hamburger = document.querySelector(".burger-menu");
const burgerNav = document.querySelector(".burger-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  burgerNav.classList.toggle("active");
});

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("item");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}




function showMore(){
  let more = document.getElementById("hiddenOffer");
  let selector = document.getElementById("selector")
  if (more.style.display === "none"){
    more.style.display = "flex";
    selector.textContent = "See Less"
  } else {
    more.style.display = "none";
    selector.textContent = "See All"
  }
}
