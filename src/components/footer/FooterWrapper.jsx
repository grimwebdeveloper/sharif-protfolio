import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';

const FooterWrapper = () => {
	return (
		<div className='text-white max-w-7xl mx-auto px-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col gap-12'>
			<FooterTop />
			<FooterMiddle />
			<FooterBottom />
		</div>
	);
};

export default FooterWrapper;
