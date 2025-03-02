export function articleGallery() {
    const slider = document.querySelector('.gallery-slider');
    
    // Exit if there's no slider on this page
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelector('.gallery-indicators');
    
    let currentIndex = 0;
    
    // Initialize slider
    function initSlider() {
        // Set first slide active
        slides[0].classList.add('active');
        
        // Create indicators
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator');
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            
            indicators.appendChild(dot);
        }
    }
    
    // Navigate to specific slide
    function goToSlide(index) {
        // Hide current slide
        slides[currentIndex].classList.remove('active');
        
        // Update indicators
        const dots = indicators.querySelectorAll('.indicator');
        dots[currentIndex].classList.remove('active');
        
        // Update index and show new slide
        currentIndex = index;
        
        // Handle loop
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        
        // Show new slide
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Set event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Initialize
    initSlider();
}