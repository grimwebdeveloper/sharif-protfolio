import FooterBottom from './footer/FooterBottom';

const Footer = () => {
	return (
		<footer className='bg-zinc-950 text-white'>
			<div className='min-h-svh flex flex-col justify-between max-w-7xl mx-auto px-4'>
				<div className='sm:px-[6vw] md:px-[8vw] lg:px-[10vw] xl:px-[120px] flex flex-col gap-8 py-8 md:py-12 xl:py-16'>
					<div className='flex flex-col gap-4'>
						<div className='flex gap-4 items-center'>
							<img
								src='profile_pic.png'
								alt='SHARIF IQBAL JAMIL'
								className='rounded-full h-24 w-24 md:h-32 md:w-32 object-cover object-bottom'
							/>
							<h2 className='col-span-2 self-center text-8xl flex'>Let's</h2>
						</div>
						<br />
						<h2 className='col-span-3 text-7xl'>Connect</h2>
					</div>

					<div className='outlne py-24 md:py-28 relative flex flex-col justify-center tems-center'>
						<hr className='text-zinc-400' />
						<div className='absolute top-1/2 left-2/3 lg:left-10/12 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] bg-violet-600 rounded-full flex justify-center items-center'>
							<i className='ri-arrow-left-down-line text-7xl'></i>
						</div>
					</div>

					<ul className='flex flex-col md:flex-row gap-8 uppercase'>
						<li>
							<a
								href='#'
								className='outline outline-gray-400 rounded-full px-6 py-4 font-semibold flex items-center gap-1 justify-center'
							>
								<i className='ri-mail-send-fill'></i>
								grimwebdeveloper@gmail.com
							</a>
						</li>
						<li>
							<a
								href='#'
								className='outline outline-gray-400 rounded-full px-6 py-4 font-semibold flex items-center gap-1 justify-center'
							>
								<i class='ri-cellphone-fill'></i>
								+91 9905100804
							</a>
						</li>
					</ul>
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
};

export default Footer;
