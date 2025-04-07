import Hero from './Hero';
import Navbar from './Navbar';

function Header() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
