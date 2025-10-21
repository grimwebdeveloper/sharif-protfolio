import HeaderContent from './HeaderContent';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className='relative max-w-7xl mx-auto px-4 h-screen overflow-hidden'>
			<Navbar />
			<HeaderContent />
		</header>
	);
};

export default Header;
