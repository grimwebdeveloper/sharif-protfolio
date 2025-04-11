import { useEffect, useRef } from 'react';
import GitHubButton from '../../Global/GitHubButton';
import gsap from 'gsap';

function Hero() {
  const handRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,          // 🔁 Infinite loop
      repeatDelay: 1,      // ⏱ Optional delay between loops
      delay: 1,            // ⏱ Initial delay before first run
    });
  
    tl.to(handRef.current, {
      rotate: 15,
      duration: 0.2,
      ease: 'power1.inOut',
      transformOrigin: 'bottom center', // 🧠 rotate from wrist
    })
      .to(handRef.current, {
        rotate: -15,
        duration: 0.2,
        ease: 'power1.inOut',
      })
      .to(handRef.current, {
        rotate: 10,
        duration: 0.2,
        ease: 'power1.inOut',
      })
      .to(handRef.current, {
        rotate: -10,
        duration: 0.2,
        ease: 'power1.inOut',
      })
      .to(handRef.current, {
        rotate: 0,
        duration: 0.2,
        ease: 'power1.inOut',
      });
  }, []);

  return (
    <div className="p-4 flex flex-col gap-24 justify-center hero">
      <h2 className="flex flex-col text-4xl -mt-28.">
        <div className="flex w-[66%] gap-3">
          <div className="self-end">...</div>
          <div className="flex flex-col gap-0">
            <div className="name text-sm w-[66vw] pl-[1vw]">
              Hi
              <span ref={handRef} className="inline-block">
                ✋
              </span>
              , I&apos;m SHARIF IQBAL JAMIL
            </div>
            <div>Front-end</div>
          </div>
        </div>

        <div className="w-[66%] ms-auto flex gap-3">
          Developer <span>...</span>
        </div>
      </h2>
      <div className="flex justify-center items-center gap-6">
        <GitHubButton text="Resume" />
        <GitHubButton text="Hire Me" />
      </div>
    </div>
  );
}

export default Hero;
