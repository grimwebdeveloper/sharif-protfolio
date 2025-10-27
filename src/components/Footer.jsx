import FooterBottom from './footer/FooterBottom';
import FooterMiddle from './footer/FooterMiddle';
import FooterTop from './footer/FooterTop';
import Galaxy from './Galaxy';

const Footer = () => {
	return (
		<Galaxy
			density={0.75}
			saturation={1}
			twinkleIntensity={0.5}
			starSpeed={0.5}
		>
			<div className='absolute top-0 left-0 w-full h-full text-white min-h-full grid place-items-center'>
				<div className='max-w-7xl mx-auto px-4 ouline w-full flex flex-col gap-12'>
					<FooterTop />
					<FooterMiddle />
					<FooterBottom />
				</div>
			</div>
		</Galaxy>
	);
};

export default Footer;
