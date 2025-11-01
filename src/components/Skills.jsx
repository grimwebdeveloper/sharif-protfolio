import { useState } from 'react';
import { skills } from '../data';

const Skills = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	return (
		<section id='skills' className='max-w-7xl mx-auto px-4 py-16'>
			<h2 className='uppercase font-black font-[Oswald] text-5xl pb-12 border-b border-zinc-400'>
				skills
			</h2>

			{skills.map((skill) => (
				<div
					key={skill.id}
					className='border-b border-zinc-400 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-12 relative group overflow-hidden'
					onMouseMove={(e) => {
						const rect = e.currentTarget.getBoundingClientRect();
						setPosition({
							x: e.clientX - rect.left,
							y: e.clientY - rect.top,
						});
					}}
				>
					<h3 className='font-normal text-4xl uppercase'>{skill.skills}</h3>
					<p className='text-2xl font-extralight font-mono text-zinc-600'>
						{skill.description}
					</p>

					<img
						src={skill.imgSrc}
						alt={skill.description}
						className={`absolute h-[75%] hidden group-hover:block pointer-events-none transition-transform duration-300 ease-out ${skill.class}`}
						style={{
							transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
						}}
					/>
				</div>
			))}
		</section>
	);
};

export default Skills;
