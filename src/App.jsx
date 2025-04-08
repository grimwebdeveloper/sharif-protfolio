import About from './components/About/About';
import MouseFollower from './components/Global/MouseFollower';
import SplashCursor from './components/Global/SplashCursor';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="perspective-distant">
      <SplashCursor />
      <MouseFollower />
      {/* <Loader /> */}
      <Header />
      {/* <About /> */}
    </div>
  );
}

export default App;
