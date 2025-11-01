import HeaderBackground from './components/header/HeaderBackground';
import Hero from './components/header/Hero';
import Navbar from './components/header/Navbar';

const Header = () => {
	return (
		<header id='header' className='max-w-7xl px-4 mx-auto relative'>
			<Navbar />
			<Hero />
			<HeaderBackground />
		</header>
	);
};

export default Header;
