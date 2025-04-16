import { useRef } from 'react';
import MouseFollower from './components/Global/MouseFollower';
import SplashCursor from './components/Global/SplashCursor';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from './components/About/About';
import CurrentLearningAndFutureGoals from './components/Current Learning & Future Goals/CurrentLearningAndFutureGoals';
import SkillsAndTools from './components/Skills & Tools/SkillsAndTools';
import Experience from './components/Experience/Experience';
import Card from './Card';
import Footer from './components/Footer/Footer';
function App() {
  const main = useRef(null);

  useGSAP(() => {
    gsap.from(main.current, {
      opacity: 0,
      // duration: 1.8,
      // delay: 5.2,
      onComplete: () => {},
    });
  });

  return (
    <div className="overflow-x-hidden bg-zinc-950 text-white">
      {/* <SplashCursor /> */}
      {/* <MouseFollower /> */}
      {/* <Loader /> */}
      <main ref={main}>
        <Header />
        <About />
        {/* <CurrentLearningAndFutureGoals />
        <SkillsAndTools />
        <Card /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
