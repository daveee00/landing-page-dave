// Function to animate the header scroll line
function animateHeaderScrollLine() {
    const line = document.getElementById('scroll-line-header');
    const container = line.parentElement;
    
    // Reset position
    line.style.transform = 'translateY(-100%)';
    
    // Animate
    const animation = line.animate([
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(100%)' }
    ], {
        duration: 2000,
        easing: 'linear',
        iterations: Infinity
    });
}

// Function to animate the sketchbook scroll line
function animateSketchbookScrollLine() {
    const line = document.getElementById('scrolling-line-skt');
    if (!line) {
        console.log('Sketchbook scroll line element not found - skipping animation');
        return;
    }
    
    const container = line.parentElement;
    
    // Reset position
    line.style.transform = 'translateY(-100%)';
    
    // Animate
    const animation = line.animate([
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(100%)' }
    ], {
        duration: 2000,
        easing: 'linear',
        iterations: Infinity
    });
}

// Start both animations when the page loads
window.addEventListener('load', () => {
    animateHeaderScrollLine();
    animateSketchbookScrollLine();
});
