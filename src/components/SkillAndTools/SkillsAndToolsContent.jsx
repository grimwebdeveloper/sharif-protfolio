import { Fragment, useState } from 'react';
import { skillsAndToolsContent } from '../data';

const SkillsAndToolsContent = ({ data }) => {
	const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
	const [hoverIndex, setHoverIndex] = useState(null);

	const handleMouseMove = (e, idx) => {
		const rect = e.currentTarget.getBoundingClientRect(); // get the div’s box
		setHoverPosition({
			x: e.clientX - rect.left, // relative X
			y: e.clientY - rect.top, // relative Y
		});
		setHoverIndex(idx);
	};

	const handleMouseLeave = () => {
		setHoverIndex(null); // hide on leave
	};

	return (
		<>
			{data.map((item, idx) => (
				<Fragment key={idx}>
					<div
						onMouseMove={(e) => handleMouseMove(e, idx)}
						onMouseLeave={handleMouseLeave}
						className='relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-12 border-t border-b border-zinc-300 group overflow-hidden'
					>
						<h3 className='font-normal text-4xl uppercase'>{item.title}</h3>
						<p className='text-2xl font-extralight font-mono text-zinc-500'>
							{item.description}
						</p>

						{/* hover effect */}
						{hoverIndex === idx && (
							<div
								className='absolute z-10 text-9xl pointer-events-none transition-transform duration-150 ease-out bg-white'
								style={{
									transform: `translate(${hoverPosition.x - 50}px, ${
										hoverPosition.y - 50
									}px)`,
								}}
							>
								<img
									src={item.image}
									alt={item.description}
									className={`relative h-[100px] ${item.bgColor}`}
								/>
							</div>
						)}
					</div>
				</Fragment>
			))}
		</>
	);
};

export default SkillsAndToolsContent;
