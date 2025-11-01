import GridDistortion from '../effects/GridDistortion';

const Projects = () => {
	return (
		<section id='work' className='max-w-7xl mx-auto px-4 py-16'>
			<h2 className='uppercase font-black font-[Oswald] text-5xl pb-12'>
				skills
			</h2>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
				{[1, 2, 3, 4, 5, 6].map((project, idx) => (
					<a key={idx} href='https://www.google.com/' target='_blank'>
						<div className='relative w-full h-[50vh]'>
							<GridDistortion
								imageSrc='/projects/work.jpg'
								grid={10}
								mouse={0.1}
								strength={0.15}
								relaxation={0.9}
								className='rounded h-full'
							/>
						</div>
						<div className='mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xl'>
							<h3>Project Name</h3>
							<h4 className='sm:italic text-zinc-600'>Project Tagline</h4>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Projects;
