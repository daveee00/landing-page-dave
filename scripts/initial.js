// initial.js - Prevent glitch by hiding content initially
(function() {
    'use strict';
    
    // Immediately hide all content except loader and #top
    // This runs before any other scripts or styles load
    function hideContentImmediately() {
        // Get all body children except loader and #top
        const body = document.body;
        if (!body) return;
        
        const children = Array.from(body.children);
        children.forEach(child => {
            if (!child.classList.contains('loader') && child.id !== 'top') {
                child.style.setProperty('display', 'none', 'important');
            }
        });
    }
    
    // Function to show all content when loader is hidden
    function showAllContent() {
        const body = document.body;
        if (!body) return;
        
        const children = Array.from(body.children);
        children.forEach(child => {
            if (!child.classList.contains('loader') && child.id !== 'top') {
                child.style.removeProperty('display');
            }
        });
    }
    
    // Function to check if loader should be hidden
    function shouldHideLoader() {
        const loader = document.querySelector('.loader');
        if (!loader) return true;
        
        // Check if loader has a data attribute indicating it should be hidden
        if (loader.dataset.hide === 'true') return true;
        
        // Check if loader has a specific class indicating it should be hidden
        if (loader.classList.contains('hidden') || loader.classList.contains('hide')) return true;
        
        // Check computed styles
        const style = window.getComputedStyle(loader);
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return true;
        
        return false;
    }
    
    // Run immediately
    hideContentImmediately();
    
    // Also run when DOM is ready (in case script runs before body exists)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideContentImmediately);
    }
    
    // Set up observer to watch for loader state changes
    function setupObserver() {
        const loader = document.querySelector('.loader');
        if (!loader) return;
        
        // Create observer to watch for attribute changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes') {
                    if (shouldHideLoader()) {
                        showAllContent();
                    } else {
                        hideContentImmediately();
                    }
                }
            });
        });
        
        // Observe the loader element
        observer.observe(loader, {
            attributes: true,
            attributeFilter: ['style', 'class', 'data-hide']
        });
    }
    
    // Set up observer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupObserver);
    } else {
        setupObserver();
    }
    
    // Check periodically and also provide manual control
    setInterval(function() {
        if (shouldHideLoader()) {
            showAllContent();
        }
    }, 50);
    
    // Expose functions globally for manual control
    window.hideContentImmediately = hideContentImmediately;
    window.showAllContent = showAllContent;
    window.shouldHideLoader = shouldHideLoader;
    
    // Provide a simple way to hide loader
    window.hideLoader = function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.dataset.hide = 'true';
            showAllContent();
        }
    };
    
})(); 
