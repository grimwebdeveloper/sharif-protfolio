import { useContext } from 'react';
import { SidebarContext } from '../context/Contexts';

const Navbar = () => {
	const { isSidebarActive, setIsSidebarActive } = useContext(SidebarContext);
	return (
		<nav className='flex justify-between items-center h-[60px]'>
			<div className='flex items-center gap-2'>
				<img src='logo.png' alt='logo' className='w-8' />
				<h1 className={`font-black ${isSidebarActive && 'hidden'}`}>SIJ</h1>
			</div>
			<ul className='hidden sm:flex sm:items-center'>
				<li>
					<a href='#' className='px-2 font-normal font-mono'>
						About
					</a>
				</li>
				<li>
					<a href='#' className='px-2 font-normal font-mono'>
						Skills
					</a>
				</li>
				<li>
					<a href='#' className='px-2 font-normal font-mono'>
						Work
					</a>
				</li>
				<li>
					<a href='#' className='px-2 font-normal font-mono'>
						Contact
					</a>
				</li>
			</ul>
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
