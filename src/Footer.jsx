import FooterWrapper from './components/footer/FooterWrapper';
import Particles from './effects/Particles';

const Footer = () => {
	return (
		<footer id='contact' className='bg-zinc-950 w-full h-[600px] relative mt-16'>
			<Particles
				particleColors={['#ffffff', '#ffffff']}
				particleCount={250}
				particleSpread={10}
				speed={0.1}
				particleBaseSize={100}
				moveParticlesOnHover={true}
				alphaParticles={false}
				disableRotation={false}
			>
				<FooterWrapper />
			</Particles>
		</footer>
	);
};

export default Footer;
