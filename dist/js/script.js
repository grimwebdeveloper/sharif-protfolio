// Locomotive smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// Dark & Light mode effect
document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const themeStylesheet = document.getElementById('themeStylesheet');

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeStylesheet.setAttribute('href', savedTheme);
    }

    modeToggle.addEventListener('click', () => {
        const currentTheme = themeStylesheet.getAttribute('href');
        const newTheme = currentTheme === 'dist/css/light-mode.css' ? 'dist/css/dark-mode.css' : 'dist/css/light-mode.css';
        themeStylesheet.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme); // Save the new theme in localStorage
    });
});

// Increasing percentage value
const percentageValue = document.querySelector('#percentage-value');
let count = 0;

const interval = setInterval(() => {
    count++;
    percentageValue.textContent = count;
    if (count >= 100) {
        clearInterval(interval);
    }
}, 15);

// Animation
const tl = gsap.timeline();

tl.to('#loader',
    {
        duration: 1.8,
        delay: 0.1,

    });

tl.to('#loader', {
    duration: 0.3,
    delay: 0.1,
    opacity: 0,    // Add fade-out effect
    display: 'none'
});