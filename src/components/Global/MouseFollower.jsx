import gsap from 'gsap';
import { useRef, useEffect } from 'react';

function MouseFollower() {
  const mouseFollower = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(mouseFollower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 2.25,
        ease: 'back.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={mouseFollower}
      className="absolute z-50 bg-white h-4 w-4 rounded-full"
    ></div>
  );
}

export default MouseFollower;
