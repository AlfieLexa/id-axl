// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation classes to elements in the viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.remove('hidden');
                element.classList.add(element.dataset.animation); // Add the animation class from data attribute
            }
        });
    }

    // Initial check
    animateOnScroll();

    // Event listener for scrolling
    window.addEventListener('scroll', animateOnScroll);
});
