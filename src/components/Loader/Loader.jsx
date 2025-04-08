import { useEffect, useRef, useState } from 'react';
import Orb from './Orb';
import Particles from './Particles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer;
    if (counter < 100) {
      timer = setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 10);
    }

    return () => clearTimeout(timer);
  }, [counter]);

  const circle = useRef(null);
  const orb = useRef(null);
  const parent = useRef(null);
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(circle.current, {
      opacity: 0,
      delay: 2.9,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        circle.current.style.display = 'none';
      },
    });
    tl.to(orb.current, {
      opacity: 0,
      duration: 0.3,
    });
    tl.to(parent.current, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        parent.current.style.display = 'none';
        document.body.style.overflow = 'visible';
      },
    });
  });

  return (
    <div ref={parent} className="h-screen bg-zinc-900 relative overflow-hidden">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={700}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      />
      <div
        ref={orb}
        className="w-full h-[204px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={300}
          forceHoverState={true}
        />
      </div>
      <div
        ref={circle}
        className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[150px] h-[150px] text-black flex justify-center items-center text-6xl z-10"
      >
        {counter}
      </div>
    </div>
  );
}

export default Loader;
