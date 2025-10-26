const Button = ({ text, href, newTab }) => {
	return (
		<a
			href={href}
			target={newTab ? '_blank' : '_self'}
			className='outline-2 px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 btn-effect hover:text-white'
		>
			{text}
			<i className='ri-arrow-right-up-line'></i>
		</a>
	);
};

export default Button;
