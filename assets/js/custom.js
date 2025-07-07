// Disable context menu
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll('.video-slide');
        const totalSlides = slides.length;
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Initially show the first slide
        showSlide(currentSlide);

        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
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
