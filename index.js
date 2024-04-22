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

const gap = 15;

const tripCarousels = document.querySelectorAll('.trip-carousel');
const tripContents = document.querySelectorAll('.trip-content');
const tripNextButtons = document.querySelectorAll('.trip-next');
const tripPrevButtons = document.querySelectorAll('.trip-prev');

tripNextButtons.forEach((button, index) => {
  button.addEventListener("click", e => {
    const tripCarousel = tripCarousels[index];
    const tripContent = tripContents[index];
    const width = tripCarousel.offsetWidth;
    
    tripCarousel.scrollBy(width + gap, 0);
    
    if (tripCarousel.scrollWidth !== 0) {
      tripPrevButtons[index].style.display = "flex";
    }
    
    if (tripContent.scrollWidth - width - gap <= tripCarousel.scrollLeft + width) {
      tripNextButtons[index].style.display = "none";
    }
  });
});

tripPrevButtons.forEach((button, index) => {
  button.addEventListener("click", e => {
    const tripCarousel = tripCarousels[index];
    const tripContent = tripContents[index];
    const width = tripCarousel.offsetWidth;
    
    tripCarousel.scrollBy(-(width + gap), 0);
    
    if (tripCarousel.scrollLeft - width - gap <= 0) {
      tripPrevButtons[index].style.display = "none";
    }
    
    if (!(tripContent.scrollWidth - width - gap <= tripCarousel.scrollLeft + width)) {
      tripNextButtons[index].style.display = "flex";
    }
  });
});

window.addEventListener("resize", () => {
  tripCarousels.forEach((carousel, index) => {
    width = carousel.offsetWidth;
  });
});



