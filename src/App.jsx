import ReactLenis from 'lenis/react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import CurrentLearningAndFuturePlans from './components/Current Learning & Future Plans/CurrentLearningAndFuturePlans';
import AboutMe from './components/About Me/AboutMe';
import SkillsAndTools from './components/Skills & Tools/SkillsAndTools';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import SplashCursor from './SplashCursor';

function App() {
  return (
    <>
    <SplashCursor />
    <ReactLenis root>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <AboutMe />
        <SkillsAndTools />
        <Experience />
        <Projects />
        <CurrentLearningAndFuturePlans />
      </main>
      <Footer />
    </ReactLenis>
    </>
  );
}

export default App;
