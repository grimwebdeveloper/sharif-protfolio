const SidebarSocials = () => {
	return (
		<div className='py-12 border-t border-zinc-300'>
			<h2 className='font-black mb-4 uppercase'>Socials</h2>
			<ul className='flex items-center gap-4 font-mono'>
				<li>
					<a href='#' className='flex items-center gap-1'>
						<i className='ri-linkedin-fill'></i>
						LinkedIn
					</a>
				</li>
				<li>
					<a href='#' className='flex items-center gap-1'>
						<i className='ri-github-fill'></i>
						GitHub
					</a>
				</li>
				<li>
					<a href='#' className='flex items-center gap-1'>
						<i className='ri-twitter-fill'></i>
						Twitter
					</a>
				</li>
			</ul>
		</div>
	);
};

export default SidebarSocials;
