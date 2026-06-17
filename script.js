const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

// Function to move to next slide
function showNextSlide() {
  slides[currentSlide].style.display = 'none';

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].style.display = 'block';
}

// Function to move to previous slide
function showPrevSlide() {
  let previousSlide;

  if (currentSlide === 0) {
    previousSlide = slides.length - 1;
  } else {
    previousSlide = currentSlide - 1;
  }

  slides[currentSlide].style.display = 'none';
  slides[previousSlide].style.display = 'block';

  currentSlide = previousSlide;
}

// Event listeners
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Auto-play every 5 seconds
setInterval(() => {
  showNextSlide();
}, 5000);
