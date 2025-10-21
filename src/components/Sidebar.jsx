import { useContext } from 'react';
import { SidebarContext } from '../context/Contexts';

const Sidebar = () => {
	const { isSidebarActive, setIsSidebarActive } = useContext(SidebarContext);
	console.log(isSidebarActive);
	return (
		<aside
			className={`fixed top-0 right-0 w-full h-svh bg-white/0 backdrop-blur-3xl px-4 ${
				isSidebarActive ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div className='h-[60px] flex items-center justify-end'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='size-8 cursor-pointer'
					onClick={() => setIsSidebarActive(false)}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18 18 6M6 6l12 12'
					/>
				</svg>
			</div>
			Sidebar
		</aside>
	);
};

export default Sidebar;
