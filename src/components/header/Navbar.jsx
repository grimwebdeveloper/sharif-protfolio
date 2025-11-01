import { useContext } from 'react';
import NavLinks from './NavLinks';
import { SidebarContext } from '../../context/Contexts';

const Navbar = () => {
	const { setIsSidebarActive } = useContext(SidebarContext);
	return (
		<nav className='h-16 flex items-center justify-between'>
			{/* logo */}
			<div className='flex items-center gap-2'>
				<img src='/logo.png' alt='logo' className='w-8' />
				<h1 className='uppercase font-black'>sij</h1>
			</div>
			{/* links */}
			<NavLinks />
			{/* hamburger menu */}
			<i onClick={() => setIsSidebarActive(true)} className='ri-menu-line text-2xl block sm:hidden'></i>
		</nav>
	);
};

export default Navbar;
