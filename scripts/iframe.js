// Function to adjust iframe widths for mobile devices
function adjustIframeWidths() {
  // Check if screen width is 1000px or less
  if (window.matchMedia("(max-width: 1000px)").matches) {
    // Get all iframes within .draw-grid elements
    const iframes = document.querySelectorAll('.draw-grid iframe');
    
    // Set width to 60% for each iframe
    iframes.forEach(iframe => {
      iframe.setAttribute('width', '90%');
    });
  } else {
    // Reset to original width for larger screens
    const iframes = document.querySelectorAll('.draw-grid iframe');
    
    iframes.forEach(iframe => {
      iframe.setAttribute('width', '30%');
    });
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', adjustIframeWidths);

// Run on window resize
window.addEventListener('resize', adjustIframeWidths); 