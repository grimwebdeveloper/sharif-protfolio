import Lightning from './Lighting';

function Header() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative">
      <div className="w-full h-full absolute">
        <Lightning hue={220} xOffset={0} speed={0.5} intensity={1} size={1} />
      </div>
    </div>
  );
}

export default Header;
