// Locomotive smooth scrolling
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

Shery.makeMagnet('.magnet-target', {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

// Shery.mouseFollower({
//     //Parameters are optional.
//     // skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 0.3,
// });


Shery.hoverWithMediaCircle('.snt-hover', {
    images: [
        './assets/img/html.png',
        './assets/img/css.png',
        './assets/img/sass.png',
        './assets/img/bootstrap.png',
        './assets/img/tailwindcss.png',
        './assets/img/javascript.png',
        './assets/img/react.png',
        './assets/img/react-router.png',
        './assets/img/redux.png',
        './assets/img/gsap.png',
        './assets/img/locomotive.png',
        './assets/img/shery.png',
        './assets/img/git.png',
        './assets/img/github.png',
        './assets/img/figma.png',
        './assets/img/vs-code.png',
        './assets/img/chrome.png',
        './assets/img/firefox.png',
        './assets/img/chatgpt.png',
    ],
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
