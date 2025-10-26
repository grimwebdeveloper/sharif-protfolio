import { useContext } from 'react';
import { SidebarContext } from '../context/Contexts';
import NavLinkEffect from './NavLinkEffect';

const Navbar = () => {
	const navLinks = [
		{
			link: '#',
			text: 'About',
		},
		{
			link: '#',
			text: 'Skills',
		},
		{
			link: '#',
			text: 'Work',
		},
		{
			link: '#',
			text: 'Contact',
		},
	];
	const { isSidebarActive, setIsSidebarActive } = useContext(SidebarContext);
	return (
		<nav className='flex justify-between items-center h-[60px]'>
			{/* logo */}
			<div className='flex items-center gap-2'>
				<img src='logo.png' alt='logo' className='w-8' />
				<h1 className={`font-black ${isSidebarActive && 'hidden'}`}>SIJ</h1>
			</div>

			{/* links */}
			<ul className='hidden sm:flex sm:items-center'>
				{navLinks.map((link, idx) => (
					<li key={idx}>
						<a href={link.link} className='px-2 font-normal font-mono'>
							<NavLinkEffect text={link.text} />
						</a>
					</li>
				))}
			</ul>

			{/* hamburger icons */}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='size-8 cursor-pointer sm:hidden'
				onClick={() => setIsSidebarActive(true)}
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3.75 9h16.5m-16.5 6.75h16.5'
				/>
			</svg>
		</nav>
	);
};

export default Navbar;
