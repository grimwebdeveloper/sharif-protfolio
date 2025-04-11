import { useRef } from 'react';
import Hero from './Hero/Hero';
import Lightning from './Lighting';
import Navbar from './Navbar/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Header() {
  const lighting = useRef(null);

  // useGSAP(() => {
  //     gsap.fromTo(lighting.current, {
  //         opacity: 0,
  //     }, {
  //         opacity: 1,
  //         duration: 1.8,
  //         delay: 5.2,
  //         onComplete: () => {
  //             gsap.to(lighting.current, {
  //                 opacity: 0,
  //                 duration: 1.8,
  //                 delay: 5.2,
  //             });
  //         },
  //     });
  // });

  useGSAP(() => {
    gsap.fromTo(
      lighting.current,
      { opacity: 0 },
      { opacity: 1, delay: 6, duration: 1 }
    );
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div ref={lighting} className="absolute inset-0 z-0">
        <Lightning hue={220} xOffset={0} speed={0.5} intensity={1} size={1} />
      </div>
      <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
        </div>
        <div className="max-w-[1440px] mx-auto">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default Header;
