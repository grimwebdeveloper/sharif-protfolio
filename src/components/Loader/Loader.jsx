import Orb from './Orb';
import Particles from './Particles';

function Loader() {
  return (
    <div className="h-screen bg-zinc-900 relative">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={700}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
      />
      <div className="w-full h-[204px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={300}
          forceHoverState={true}
        />
      </div>
    </div>
  );
}

export default Loader;