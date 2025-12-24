document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.carousel');
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.slide');
  const dots = carousel.querySelectorAll('.dot');

  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  showSlide(0);

});
