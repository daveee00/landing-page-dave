// Day/Night background switcher
function setDayNightBackground() {
    const bgPicture = document.querySelector('.bg-picture');
    const loader = document.querySelector('.loader');
    
    if (!bgPicture) {
        console.error('bg-picture element not found');
        return;
    }
    
    if (!loader) {
        console.error('loader element not found');
        return;
    }
    
    const currentHour = new Date().getHours();
    console.log('Current hour:', currentHour);
    
    // Daytime: 08:00 to 18:59 (before 19:00)
    // Nighttime: 19:00 to 07:59 (19:00 or later until 08:00)
    
    if (currentHour >= 8 && currentHour < 19) {
        // Daytime - use cute.webp
        bgPicture.style.backgroundImage =
          "url(https://goodnight-n-draw.netlify.app/cute.webp)";
        loader.style.backgroundImage =
          "url(https://goodnight-n-draw.netlify.app/cute.webp)";
        console.log('Setting daytime background: cute.webp');
    } else {
        // Nighttime - use sunset.jpeg
        bgPicture.style.backgroundImage =
          "url(https://goodnight-n-draw.netlify.app/sunset.jpeg)";
        loader.style.backgroundImage =
          "url(https://goodnight-n-draw.netlify.app/sunset.jpeg)";
        console.log('Setting nighttime background: sunset.jpeg');
    }
}

// Initialize the background when the script loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting day/night background');
    setDayNightBackground();
});

// Also try to set it immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setDayNightBackground);
} else {
    console.log('DOM already loaded, setting background immediately');
    setDayNightBackground();
}

// Update background every minute to handle day/night transitions
setInterval(setDayNightBackground, 60000); 