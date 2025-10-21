import { useContext } from 'react';
import { SidebarContext } from '../context/Contexts';
import UpRightArrow from './UpRightArrow';

const Sidebar = () => {
	const { isSidebarActive, setIsSidebarActive } = useContext(SidebarContext);
	console.log(isSidebarActive);
	return (
		<aside
			className={`rounded-tl-[40%] fixed top-0 right-0 w-full h-svh bg-white/0 backdrop-blur-3xl px-4 ${
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

			<div className='flex flex-col justify-between h-[calc(100svh-60px)]'>
				<div className='py-12 border-t border-zinc-300 mt-12'>
					<h2 className='font-black mb-12 uppercase'>Navigation</h2>
					<ul className='flex flex-col gap-12'>
						<li className='flex items-center justify-between group transition-all duration-1000'>
							<a href='#' className='text-4xl font-light'>
								About
							</a>
							<UpRightArrow />
						</li>
						<li className='flex items-center justify-between group transition-all duration-1000'>
							<a href='#' className='text-4xl font-light'>
								Skills
							</a>
							<UpRightArrow />
						</li>
						<li className='flex items-center justify-between group transition-all duration-1000'>
							<a href='#' className='text-4xl font-light'>
								Work
							</a>
							<UpRightArrow />
						</li>
						<li className='flex items-center justify-between group transition-all duration-1000'>
							<a href='#' className='text-4xl font-light'>
								Contact
							</a>
							<UpRightArrow />
						</li>
					</ul>
				</div>
				<div className='py-12 border-t border-zinc-300'>
					<h2 className='font-black mb-4 uppercase'>Socials</h2>
					<ul className='flex items-center gap-4 font-mono'>
						<li>
							<a href='#' className='flex items-center gap-1'>
								<i class='ri-linkedin-fill'></i>
								LinkedIn
							</a>
						</li>
						<li>
							<a href='#' className='flex items-center gap-1'>
								<i class='ri-github-fill'></i>
								GitHub
							</a>
						</li>
						<li>
							<a href='#' className='flex items-center gap-1'>
								<i class='ri-twitter-fill'></i>
								Twitter
							</a>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
