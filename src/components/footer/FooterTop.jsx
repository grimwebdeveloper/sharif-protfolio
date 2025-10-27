const FooterTop = () => {
	return (
		<div className='flex items-center justify-between font-semibold'>
			<div>&copy; 2025</div>
			<a href='#header' className='uppercase flex items-center justify-center gap-4'>
				Back to top
				<i className='ri-arrow-up-double-line outline rounded-full w-8 h-8 text-center bg-white text-black text-xl p-0.5'></i>
			</a>
		</div>
	);
};

export default FooterTop;
