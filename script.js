        // Progress Bar Animation
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-fill');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width + '%';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                observer.observe(bar);
            });

            // Testimonial Slider
            const track = document.querySelector('.testimonial-track');
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.slider-dot');
            let currentIndex = 0;
            
            function updateSlider() {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
            });
            
            // Auto slide
            setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }, 5000);

            // Form Submission
            const form = document.getElementById('consultation-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your booking request! We will contact you shortly to confirm your consultation.');
                form.reset();
            });

            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                }
            });
        });
