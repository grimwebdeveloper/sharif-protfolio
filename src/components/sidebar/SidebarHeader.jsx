import { useContext } from 'react';
import { SidebarContext } from '../../context/Contexts';

const SidebarHeader = () => {
	const { setIsSidebarActive } = useContext(SidebarContext);
	return (
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
	);
};

export default SidebarHeader;
