import HeaderContent from './header/HeaderContent';
import Navbar from './header/Navbar';

const Header = () => {
	return (
		<header id='header' className='relative max-w-7xl mx-auto px-4 h-svh overflow-hidden'>
			<Navbar />
			<HeaderContent />
		</header>
	);
};

export default Header;
