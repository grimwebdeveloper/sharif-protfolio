import GridDistortion from '../GridDistortion';
import { projects } from './data';

const Projects = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-16 pb-32'>
			<h2 className='text-5xl font-black mb-4'>projects</h2>
			<p className='font-sans text-slate-600 mb-12'>
				A collection of my most recent and creative web experiences
			</p>
			<div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-16'>
				{projects.map((item, idx) => (
					<a href='#' key={idx}>
						<div className='h-[500px] w-full bg-slate-600 p-5 relative overflow-hidden shadow hover:shadow-sm'>
							<GridDistortion
								imageSrc='/projects/1.jpg'
								grid={6}
								mouse={0.25}
								strength={0.15}
								relaxation={0.9}
								className='h-full w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
							/>
						</div>
						<div className='flex items-center justify-between mt-2'>
							<h3>Project Title</h3>
							<h4 className='italic text-zinc-400'>- An Mini Ecommerce</h4>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;
