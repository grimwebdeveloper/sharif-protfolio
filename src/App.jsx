import { useRef } from 'react';
import MouseFollower from './components/Global/MouseFollower';
import SplashCursor from './components/Global/SplashCursor';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from './components/About/About';
import CurrentLearningAndFutureGoals from './components/Current Learning & Future Goals/CurrentLearningAndFutureGoals';

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
    <div className="overflow-x-hidden bg-zinc-950 text-white">
      {/* <SplashCursor />
      <MouseFollower />
      <Loader /> */}
      <main ref={main}>
        {/* <Header /> */}
        {/* <About /> */}
        {/* <CurrentLearningAndFutureGoals /> */}
      </main>
    </div>
  );
}

export default App;
