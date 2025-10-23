const Projects = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-16'>
			<h2 className='text-5xl font-black mb-4'>projects</h2>
			<p className='font-sans text-slate-600'>
				A collection of my most recent and creative web experiences
			</p>
			<div className='mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-16'>
				{[1, 2, 3, 4, 5, 6].map((item, idx) => (
					<div key={idx}>
						<div className='h-96 w-full bg-slate-600 p-5 relative overflow-hidden'>
							<img
								src='/projects/1.png'
								alt=''
								className='h-full w-[88%] object-contain absolute -rotate-12'
							/>
						</div>
						<div className='flex items-center justify-between mt-2'>
							<h3>Project Title</h3>
							<h4 className='italic text-zinc-400'>- An Mini Ecommerce</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
