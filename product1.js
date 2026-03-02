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
document.addEventListener('DOMContentLoaded', () => {

  /* ===== Carousel Code (unchanged) ===== */
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

  /* ===== Buy Now → Checkout Logic ===== */
  const buyNowBtn = document.querySelector('.buy-now-btn');
  const addedMsg = document.querySelector('.added-msg');

  let isAddedToCart = false;

  buyNowBtn.addEventListener('click', () => {
    if (!isAddedToCart) {
      // First click
      addedMsg.style.display = 'block';
      buyNowBtn.textContent = 'Checkout';
      isAddedToCart = true;
    } else {
      // Second click
      window.location.href = 'checkout.html';
    }
  });

});

// Customer Reviews Sliding Carousel
document.addEventListener('DOMContentLoaded', () => {
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    if (!reviewsCarousel) return;

    const reviewCards = reviewsCarousel.querySelectorAll('.review-card');
    if (reviewCards.length === 0) return;

    let currentPosition = 0;
    const cardWidth = 320; // 300px width + 20px gap
    const visibleCards = 3;
    const maxPosition = -(reviewCards.length - visibleCards) * cardWidth;

    // Create navigation buttons
    const reviewsContainer = reviewsCarousel.parentElement;
    const navContainer = document.createElement('div');
    navContainer.className = 'reviews-navigation';
    navContainer.innerHTML = `
        <button class="review-nav-btn prev-review" aria-label="Previous reviews">&#10094;</button>
        <button class="review-nav-btn next-review" aria-label="Next reviews">&#10095;</button>
    `;
    reviewsContainer.appendChild(navContainer);

    // Ensure all cards are visible for sliding
    reviewCards.forEach(card => {
        card.style.display = 'block';
    });

    function updateCarouselPosition() {
        reviewsCarousel.style.transform = `translateX(${currentPosition}px)`;

        // Update navigation buttons
        const prevBtn = navContainer.querySelector('.prev-review');
        const nextBtn = navContainer.querySelector('.next-review');

        if (prevBtn && nextBtn) {
            prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentPosition <= maxPosition ? '0.5' : '1';
        }
    }

    // Navigation event listeners
    const prevBtn = navContainer.querySelector('.prev-review');
    const nextBtn = navContainer.querySelector('.next-review');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPosition < 0) {
                currentPosition += cardWidth * visibleCards;
                if (currentPosition > 0) currentPosition = 0;
                updateCarouselPosition();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPosition > maxPosition) {
                currentPosition -= cardWidth * visibleCards;
                if (currentPosition < maxPosition) currentPosition = maxPosition;
                updateCarouselPosition();
            }
        });
    }

    // Auto-play functionality - slide one card at a time for smoother effect
    let autoPlayInterval = setInterval(() => {
        if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            if (currentPosition < maxPosition) currentPosition = 0; // Reset to beginning
            updateCarouselPosition();
        } else {
            currentPosition = 0; // Reset to beginning
            updateCarouselPosition();
        }
    }, 4000); // Change every 4 seconds

    // Pause auto-play on hover
    reviewsContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    // Resume auto-play when mouse leaves
    reviewsContainer.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => {
            if (currentPosition > maxPosition) {
                currentPosition -= cardWidth;
                if (currentPosition < maxPosition) currentPosition = 0;
                updateCarouselPosition();
            } else {
                currentPosition = 0;
                updateCarouselPosition();
            }
        }, 4000);
    });

    // Initialize position
    updateCarouselPosition();
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherFaqItem = otherQuestion.closest('.faq-item');
                    otherFaqItem.classList.remove('active');
                }
            });

            // Toggle the clicked FAQ item
            const faqItem = question.closest('.faq-item');
            faqItem.classList.toggle('active');
        });

        // Add keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const body = document.body;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});