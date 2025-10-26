import React from 'react';
import Button from './Button';

const Introduction = () => {
	return (
		<section
			id='about'
			className='max-w-7xl mx-auto px-4 py-32 lg:flex gap-16 xl:gap-32'
		>
			<h2 className='font-black text-5xl mb-12'>Introduction</h2>
			<div className='flex flex-col text-2xl xl:text-[28px] gap-6 font-extralight'>
				<p>
					I'm a full-stack MERN developer passionate about building modern,
					responsive, and high-performance web applications.
				</p>
				<p>
					I craft seamless user experiences using React.js, Next.js, Tailwind
					CSS, and GSAP, while leveraging Node.js, Express, MongoDB, and AI
					integrations for intelligent, scalable solutions.
				</p>
				<div className='flex gap-6 mt-6 font-mono uppercase'>
					<Button text='Contact Me' href='#footer' />
					<Button text='Resume' href='/Resume.pdf' newTab={true} />
				</div>
			</div>
		</section>
	);
};

export default Introduction;
