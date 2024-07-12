// Locomotive smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.makeMagnet('.magnet-target', {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
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
}, 0.1);
// }, 15);
