// Back to top functionality with smooth scroll animation
document.addEventListener('DOMContentLoaded', function() {
    const backTopButton = document.getElementById('back-top');
    const topElement = document.getElementById('top');
    
    if (backTopButton && topElement) {
        backTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Smooth scroll to the top element
            topElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});
