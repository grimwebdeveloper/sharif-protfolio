import Hero from './Hero/Hero';
import Lightning from './Lighting';
import Navbar from './Navbar/Navbar';

function Header() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative">
      {/* <div className="w-full h-full absolute">
        <Lightning hue={220} xOffset={0} speed={0.5} intensity={1} size={1} />
      </div> */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
