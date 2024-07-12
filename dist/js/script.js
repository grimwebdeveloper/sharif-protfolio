// Locomotive smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const tl = gsap.timeline();

// Increasing percentage value
let count = 0;

const interval = setInterval(() => {
    const percentageValue = document.querySelector('#percentage-value');
    const loader = document.querySelector('#loader');
    count++;
    percentageValue.textContent = count;
    if (count >= 100) {
        clearInterval(interval);
        tl.to('#loader', {
            opacity: 0,
            onComplete: () => {
                loader.remove();
                tl.from('#main', {
                    y: '100vh',
                    display: 0,
                });
            },
        });
    }
}, 15);
