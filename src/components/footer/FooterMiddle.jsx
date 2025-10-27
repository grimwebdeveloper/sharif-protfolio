const FooterMiddle = () => {
	return (
		<>
			<h2 className='text-center font-black text-[8.3vw] xl:text-[106px]'>
				READY TO JOIN YOUR TEAM
			</h2>
			<div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center font-semibold'>
				<a
					href='mailto:grimwebdeveloper@gmail.com'
					className='outline outline-zinc-400 rounded-full px-6 py-3 w-full sm:w-fit flex items-center justify-center gap-2 uppercase hover:bg-black'
				>
					<i className='ri-mail-send-fill'></i>grimwebdeveloper@gmail.com
				</a>
				<a
					href='tel:+9204471428'
					className='outline outline-zinc-400 rounded-full px-6 py-3 w-full sm:w-fit flex items-center justify-center gap-2 uppercase hover:bg-black'
				>
					<i className='ri-cellphone-fill'></i>+91 9204471428
				</a>
			</div>
		</>
	);
};

export default FooterMiddle;
