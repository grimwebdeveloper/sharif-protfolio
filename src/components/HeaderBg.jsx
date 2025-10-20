import './HeaderBg.css';

const HeaderBg = () => {
	return (
		<div className='h-screen flex justify-center items-center gap-16'>
			<div
				id='blob-one'
				className='blob w-64 h-64 rounded-full opacity-50'
			></div>
			<div
				id='blob-two'
				className='blob w-64 h-64 rounded-full opacity-50'
			></div>
		</div>
	);
};

export default HeaderBg;
