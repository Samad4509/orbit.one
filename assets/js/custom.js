document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.video-slider');
    const slides = document.querySelectorAll('.video-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    // Create dots
    function createDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Initialize slider
    function initSlider() {
        createDots();
        updateSlider();
        startAutoSlide();
    }

    // Update slider position and active states
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active classes for slides
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update active dots
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
        resetAutoSlide();
    }

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
        resetAutoSlide();
    }

    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
        resetAutoSlide();
    }

    // Auto-slide functionality
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 10000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startAutoSlide);

    // Initialize the slider
    initSlider();
});



// service card js
document.querySelectorAll('.rainbow-box-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        window.location.href = this.querySelector('a').href;
    });
});

// servicess js
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-text').classList.add('opacity-0', 'invisible');
            this.querySelector('.fa-2x').classList.add('text-white', 'bg-primary', 'rounded-circle', 'p-3');
            this.querySelector('.btn').classList.remove('d-none');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-text').classList.remove('opacity-0', 'invisible');
            this.querySelector('.fa-2x').classList.remove('text-white', 'bg-primary', 'rounded-circle', 'p-3');
            this.querySelector('.btn').classList.add('d-none');
        });
    });
});
