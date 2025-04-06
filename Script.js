// script.js
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    // const heroSection = document.querySelector('.hero');
    // const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > 0) { // Change condition to check for any scroll
        navbar.style.opacity = '0.8';
    } else {
        navbar.style.opacity = '1';
    }
});