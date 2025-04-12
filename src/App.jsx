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
    // gsap.from(main.current, {
    //   opacity: 0,
    //   duration: 1.8,
    //   delay: 5.2,
    //   onComplete: () => {},
    // });
  });

  return (
    <div className="overflow-x-hidden bg-zinc-950">
      {/* <SplashCursor /> Don't change anything */}
      {/* <MouseFollower /> Don't change anything */}
      {/* <Loader /> */}
      <main ref={main}>
        <Header />
      </main>
    </div>
  );
}

export default App;
