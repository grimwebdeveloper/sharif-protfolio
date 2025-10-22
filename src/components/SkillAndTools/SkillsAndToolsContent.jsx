import { Fragment } from 'react';
import { skillsAndToolsContent } from '../data';

const SkillsAndToolsContent = () => {
	return (
		<>
			{skillsAndToolsContent.map((item, idx) => (
				<Fragment key={idx}>
					<div
						key={idx}
						className='relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-12 border-t border-b border-zinc-300 group'
					>
						<h3 className='font-normal text-4xl uppercase'>{item.title}</h3>
						<p className='text-2xl font-extralight font-mono text-zinc-500'>
							{item.description}
						</p>
						{/* <i className='ri-html5-fill absolute top-0 left-0 text-9xl z-50 bg-red-50'></i> */}
						{/* <img
							src={item.image}
							className={`absolute top-0 left-0 h-2/3 group-hover:block`}
						/> */}
					</div>
				</Fragment>
			))}
		</>
	);
};

export default SkillsAndToolsContent;
