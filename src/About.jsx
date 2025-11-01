const About = () => {
	const introBtns = [
		{ id: 1, text: 'contact', href: '#contact', target: '_self' },
		{ id: 2, text: 'resume', href: '/Resume.pdf', target: '_blank' },
	];
	return (
		<section
			id='about'
			className='max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-12'
		>
			<h2 className='uppercase font-black font-[Oswald] text-5xl mb-8 lg:col-span-4'>
				introduction
			</h2>
			<div className='lg:col-span-8 font-extralight'>
				<p className='text-xl md:text-2xl xl:text-[26px] mb-4'>
					I'm a full-stack MERN developer passionate about building modern,
					responsive, and high-performance web applications.
				</p>
				<p className='text-xl md:text-2xl xl:text-[26px] mb-8'>
					I craft seamless user experiences using React.js, Next.js, Tailwind
					CSS, and GSAP, while leveraging Node.js, Express, MongoDB, and AI
					integrations for intelligent, scalable solutions.
				</p>
				<div className='flex items-center gap-4'>
					{introBtns.map((btn, idx) => (
						<a key={idx} href={btn.href} target={btn.target}>
							<button
								key={btn.id}
								className='uppercase cursor-pointer font-medium font-mono outline px-3 py-3  md:px-6 md:py-3 rounded-full relative btn hover:text-white overflow-hidden text-lg w-40'
							>
								{btn.text}
							</button>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
