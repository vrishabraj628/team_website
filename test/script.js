document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.fade-slide-image');
    
    // Set up Intersection Observer
    const observerOptions = {
        threshold: 0.5 // Image triggers animation when 50% visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);
    
    // Observe each image
    images.forEach(image => observer.observe(image));
});