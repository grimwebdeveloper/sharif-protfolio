import ReactLenis from 'lenis/react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
  return (
    <ReactLenis root>
      <header>
        <Navbar />
        <Hero />
      </header>
    </ReactLenis>
  );
}

export default App;
