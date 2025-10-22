import React from 'react';
import Button from './Button';

const Introduction = () => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-32 lg:flex gap-16 xl:gap-32'>
			<h2 className='font-black text-5xl mb-12'>Introduction</h2>
			<div className='flex flex-col text-2xl xl:text-[28px] gap-6 font-extralight'>
				<p>
					I'm a passionate Frontend Developer with 10 years of experience in
					crafting visually appealing, user-friendly web applications
				</p>
				<p>
					My expertise includes React.js, Next Js and modern web technologies
					like Tailwind CSS and GSAP.
				</p>
				<div className='flex gap-6 mt-6 font-mono uppercase'>
					<Button text='Contact Me' href='#contact'/>
					<Button text='Resume' href='/Resume.pdf' newTab={true} />
				</div>
			</div>
		</section>
	);
};

export default Introduction;
