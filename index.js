/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img-logo/user-slider-images/slide-1.jpg",
    "img-logo/user-slider-images/slide-2.jpg",
    "img-logo/user-slider-images/slide-3.jpg",
    "img-logo/user-slider-images/slide-4.jpg",
    "img-logo/user-slider-images/slide-5.jpg",
    "img-logo/user-slider-images/slide-6.jpg",
    "img-logo/user-slider-images/slide-7.jpg",
    "img-logo/user-slider-images/slide-8.jpg",
    "img-logo/user-slider-images/slide-9.jpg",
    "img-logo/user-slider-images/slide-10.jpg",
  ];
  let currentImageIndex = 0;

  function changeBackground() {
    document.querySelector(
      ".background-slide"
    ).style.background = `url('${images[currentImageIndex]}')center/cover fixed no-repeat`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  setInterval(changeBackground, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });
});

const setFeedback = (element, message, isSuccess) => {
  const feedbackDisplay = element.nextElementSibling;

  feedbackDisplay.innerText = message;
  element.classList.toggle("error", !isSuccess);
  element.classList.toggle("success", isSuccess);
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const validateInputs = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  document.querySelectorAll(".error, .success").forEach((element) => {
    element.innertext = "";
  });

  let allInputsValid = true;

  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    setFeedback(firstName, "Please enter a First Name", false);
    allInputsValid = false;
  } else if (firstNameValue.length < 3) {
    setFeedback(firstName, "First Name must be at least 3 characters", false);
    allInputsValid = false;
  } else {
    setFeedback(firstName, "Correct", true);
  }

  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    setFeedback(lastName, "Please enter a Last Name", false);
    allInputsValid = false;
  } else if (lastNameValue.length < 5) {
    setFeedback(lastName, "last name must be at least 5 characters", false);
    allInputsValid = false;
  } else {
    setFeedback(lastName, "Correct", true);
  }

  const emailValue = email.value.trim();
  if (emailValue === "") {
    setFeedback(email, "Please enter  a user email", false);
    allInputsValid = false;
  } else if (!isValidEmail(emailValue)) {
    setFeedback(email, "Please enter a valid Email address", false);
    allInputsValid = false;
  } else {
    setFeedback(email, "correct", true);
  }

  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    setFeedback(password, "Please enter password", false);
    allInputsValid = false;
  } else if (passwordValue.length < 8) {
    setFeedback(password, "Password must be at least 8 characters", false);
    allInputsValid = false;
  } else {
    setFeedback(password, "Correct", true);
  }

  const confirmPasswordValue = confirmPassword.value.trim();
  if (confirmPasswordValue === "") {
    setFeedback(confirmPassword, "Please confirm Password", false);
    allInputsValid = false;
  } else if (confirmPasswordValue !== passwordValue) {
    setFeedback(confirmPassword, "Passwords don't match", false);
    allInputsValid = false;
  } else {
    setFeedback(confirmPassword, "Correct", true);
  }

  if (allInputsValid) {
    form.removeEventListener("submit", validateInputs);
    form.submit();
  }
};
