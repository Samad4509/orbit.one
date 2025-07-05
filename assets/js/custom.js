// Disable context menu


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.video-slider');
    const slides = document.querySelectorAll('.video-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentIndex = 0;
    let slideInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    // Set first slide as active
    slides[0].classList.add('active');
    
    // Next slide function
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
    
    // Previous slide function
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Update slider position and active states
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active class on slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Reset timer
        resetInterval();
    }
    
    // Auto slide
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch and mouse events for swipe
    slides.forEach((slide, index) => {
        // Touch events
        slide.addEventListener('touchstart', touchStart(index));
        slide.addEventListener('touchend', touchEnd);
        // slide.addEventListener('touchmove', touchMove);
        
        // Mouse events
        slide.addEventListener('mousedown', touchStart(index));
        slide.addEventListener('mouseup', touchEnd);
        slide.addEventListener('mouseleave', touchEnd);
        // slide.addEventListener('mousemove', touchMove);
    });
    
    function touchStart(index) {
        return function(e) {
            isDragging = true;
            startPos = getPositionX(e);
            currentIndex = index;
            prevTranslate = currentIndex * -100;
            currentTranslate = prevTranslate;
            clearInterval(slideInterval);
        }
    }
    
    function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        
        const movedBy = currentTranslate - prevTranslate;
        
        if (movedBy < -100 && currentIndex < slides.length - 1) {
            currentIndex += 1;
        }
        
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1;
        }
        
        updateSlider();
        startInterval();
    }
   
    
});

// service card js
document.querySelectorAll('.rainbow-box-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
        window.location.href = this.querySelector('a').href;
    });
});

