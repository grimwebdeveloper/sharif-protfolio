import { useRef } from 'react';
import MouseFollower from './components/Global/MouseFollower';
import SplashCursor from './components/Global/SplashCursor';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  const main = useRef(null);

  useGSAP(() => {
    gsap.from(main.current, {
      opacity: 0,
      // duration: 1.8,
      // delay: 5.2,
      onUpdate: () => {
        document.body.classList.add('bg-zinc-950');
        document.body.style.overflow = 'hidden';
      },
    });
  });

  return (
    <div className="perspective-distant max-w-[1440px] mx-auto overflow-x-hidden">
      {/* <SplashCursor /> */}
      {/* <MouseFollower /> */}
      {/* <Loader /> */}
      {/* <main ref={main}>
        <Header />
      </main> */}
    </div>
  );
}

export default App;
