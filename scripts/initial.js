// initial.js - Hide all content except #top when loader is visible
(function() {
    'use strict';
    
    // Function to check if loader is visible
    function isLoaderVisible() {
        const loader = document.querySelector('.loader');
        if (!loader) return false;
        
        const style = window.getComputedStyle(loader);
        return style.display !== 'none' && 
               style.visibility !== 'hidden' && 
               style.opacity !== '0' &&
               loader.offsetParent !== null;
    }
    
    // Function to toggle content visibility
    function toggleContentVisibility() {
        const loader = document.querySelector('.loader');
        const topElement = document.querySelector('#top');
        const allContent = document.querySelectorAll('body > *:not(.loader):not(#top)');
        
        if (isLoaderVisible()) {
            // Hide all content except loader and #top
            allContent.forEach(element => {
                element.style.display = 'none';
            });
            
            // Ensure #top is visible
            if (topElement) {
                topElement.style.display = '';
            }
            
            // Ensure loader is visible
            if (loader) {
                loader.style.display = '';
                loader.style.visibility = 'visible';
                loader.style.opacity = '1';
            }
        } else {
            // Show all content when loader is hidden
            allContent.forEach(element => {
                element.style.display = '';
            });
        }
    }
    
    // Run immediately when script loads
    toggleContentVisibility();
    
    // Set up observer to watch for loader visibility changes
    function setupObserver() {
        const loader = document.querySelector('.loader');
        if (!loader) return;
        
        // Create observer to watch for attribute changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && 
                    (mutation.attributeName === 'style' || 
                     mutation.attributeName === 'class')) {
                    toggleContentVisibility();
                }
            });
        });
        
        // Observe the loader element
        observer.observe(loader, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        // Also watch for display changes via CSS
        const styleObserver = new MutationObserver(function() {
            toggleContentVisibility();
        });
        
        // Observe the document head for style changes
        styleObserver.observe(document.head, {
            childList: true,
            subtree: true
        });
    }
    
    // Set up observer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupObserver);
    } else {
        setupObserver();
    }
    
    // Also check periodically for any missed changes
    setInterval(toggleContentVisibility, 100);
    
    // Expose function globally for manual control
    window.toggleContentVisibility = toggleContentVisibility;
    window.isLoaderVisible = isLoaderVisible;
    
})(); 