import './HeaderBackground.css';

const HeaderBackground = () => {
	return (
		<div className='absolute top-0 left-0 h-full flex justify-center items-center gap-16 w-full -z-10'>
			<div
				id='blob-one'
				className='blob w-[33vw] h-[33vw] md:w[20vw] md:h-[20vw] lg:w-[337.91px] lg:h-[337.91px] rounded-full opacity-100'
			></div>
			<div
				id='blob-two'
				className='blob w-[33vw] h-[33vw] md:w[20vw] md:h-[20vw] lg:w-[337.91px] lg:h-[337.91px] rounded-full opacity-100'
			></div>
		</div>
	);
};

export default HeaderBackground;
