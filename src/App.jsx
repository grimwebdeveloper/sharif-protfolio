import { useRef } from 'react';
import MouseFollower from './components/Global/MouseFollower';
import SplashCursor from './components/Global/SplashCursor';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from './components/About/About';

function App() {
  const main = useRef(null);

  // useGSAP(() => {
  //   gsap.from(main.current, {
  //     opacity: 0,
  //     duration: 1.8,
  //     delay: 5.2,
  //     onComplete: () => {},
  //   });
  // });

  return (
    <div className="overflow-x-hidden bg-zinc-950">
      {/* <SplashCursor />
      <MouseFollower />
      <Loader /> */}
      <main ref={main}>
        {/* <Header /> */}
        <About />
      </main>
    </div>
  );
}

export default App;
