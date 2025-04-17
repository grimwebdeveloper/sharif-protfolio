import { useRef } from 'react';
import Hero from './Hero/Hero';
import Lightning from './Lighting';
import Navbar from './Navbar/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import GitHubButton from '../Global/GitHubButton';

function Header() {
  const lighting = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      lighting.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 6,
        onComplete: () => {
          gsap.to(lighting.current, {
            opacity: 0,
            duration: 1,
            delay: 5.2,
            onComplete: () => {
              document.querySelector('#lighting').remove();
            },
          });
        },
      }
    );
  });

  return (
    <div id='header' className="min-h-screen bg-zinc-950 text-white">
      <div className="-z-50 absolute">
        <GitHubButton text={'IGI'} />
      </div>
      <div
        ref={lighting}
        id="lighting"
        className="absolute inset-0 z-0 opacity-0 bg-red-600"
      >
        <Lightning hue={220} xOffset={0} speed={0.4} intensity={0.5} size={0.5} />
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
