import { useContext } from 'react';
import { SidebarContext } from '../../context/Contexts';

const SidebarLinks = () => {
	const { setIsSidebarActive } = useContext(SidebarContext);
	return (
		<div className='py-12 border-t border-zinc-300 mt-12'>
			<h2 className='font-black mb-12 uppercase'>Navigation</h2>
			<ul className='flex flex-col gap-12'>
				<li onClick={() => setIsSidebarActive(false)} className='flex items-center justify-between group transition-all duration-1000 group'>
					<a href='#about' className='text-4xl font-light'>
						About
					</a>
					<i className='ri-arrow-right-up-line text-4xl hidden group-hover:block transition-all duration-500'></i>
				</li>
				<li onClick={() => setIsSidebarActive(false)} className='flex items-center justify-between group transition-all duration-1000 group'>
					<a href='#skills' className='text-4xl font-light'>
						Skills
					</a>
					<i className='ri-arrow-right-up-line text-4xl hidden group-hover:block transition-all duration-500'></i>
				</li>
				<li onClick={() => setIsSidebarActive(false)} className='flex items-center justify-between group transition-all duration-1000 group'>
					<a href='#work' className='text-4xl font-light'>
						Work
					</a>
					<i className='ri-arrow-right-up-line text-4xl hidden group-hover:block transition-all duration-500'></i>
				</li>
				<li onClick={() => setIsSidebarActive(false)} className='flex items-center justify-between group transition-all duration-1000 group'>
					<a href='#contact' className='text-4xl font-light'>
						Contact
					</a>
					<i className='ri-arrow-right-up-line text-4xl hidden group-hover:block transition-all duration-500'></i>
				</li>
			</ul>
		</div>
	);
};

export default SidebarLinks;
