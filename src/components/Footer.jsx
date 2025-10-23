import FooterBottom from './footer/FooterBottom';

const Footer = () => {
	return (
		<footer className='bg-zinc-950 text-white min-h-[50svh] grid place-items-center'>
			<div className='max-w-7xl mx-auto px-4 py-16 ouline w-full flex flex-col gap-12'>
				<div className='flex items-center justify-between font-semibold'>
					<div>&copy; 2025</div>
					<a
						href='#'
						className='uppercase flex items-center justify-center gap-4'
					>
						Back to top
						<i className='ri-arrow-up-double-line outline rounded-full w-8 h-8 text-center bg-white text-black text-xl p-0.5'></i>
					</a>
				</div>
				<h2 className='text-center font-black text-[8.3vw] xl:text-[106px]'>
					READY TO JOIN YOUR TEAM
				</h2>
				<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center font-semibold'>
					<a
						href='#'
						className='outline outline-zinc-400 rounded-full px-6 py-3 w-full sm:w-fit flex items-center justify-center gap-2 uppercase'
					>
						<i className='ri-mail-send-fill'></i>grimwebdeveloper@gmail.com
					</a>
					<a
						href='#'
						className='outline outline-zinc-400 rounded-full px-6 py-3 w-full sm:w-fit flex items-center justify-center gap-2 uppercase'
					>
						<i className='ri-cellphone-fill'></i>+91 9905100804
					</a>
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
};

export default Footer;
