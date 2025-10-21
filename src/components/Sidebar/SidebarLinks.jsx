import UpRightArrow from '../UpRightArrow';

const SidebarLinks = () => {
	return (
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
	);
};

export default SidebarLinks;
