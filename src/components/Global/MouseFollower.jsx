import gsap from 'gsap';
import { useRef, useEffect } from 'react';

function MouseFollower() {
  const mouseFollower = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(mouseFollower.current, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 2,
        ease: 'power4.out',
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
    />
  );
}

export default MouseFollower;
