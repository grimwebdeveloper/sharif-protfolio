function SingleProject({ title, techStack, description, image }) {
  return (
    <div
      id='project'
      className='bg-zinc-800 rounded-2xl overflow-hidden min-w-[343px] w-[400px] inline-block'
    >
      <div>
        <img className='w-full h-full' src={image} alt='project' />
      </div>
      <div className='p-4 flex flex-col gap-4 py-8'>
        <h2 className='text-4xl'>{title}</h2>
        <p className='text-lg'>{description}</p>
        <div className='tech-stack flex flex-wrap items-center gap-4 mt-8'>
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className='rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
