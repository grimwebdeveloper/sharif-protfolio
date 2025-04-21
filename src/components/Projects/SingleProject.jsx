function SingleProject() {
  return (
    <div
      id="project"
      className="bg-zinc-800 rounded-2xl overflow-hidden min-w-[343px] inline-block"
    >
      <div>
        <img className="w-full h-full" src="public\project.jpg" alt="project" />
      </div>
      <div className="p-4 flex flex-col gap-4 py-8">
        <h2 className="text-4xl">Project Name Here</h2>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eos
          saepe tempore voluptatum ipsa magni vero ut tenetur dolorum mollitia
          rerum quidem obcaecati dolorem perferendis dolores, fuga quos
          architecto doloribus.
        </p>
        <div className="tech-stack flex flex-wrap items-center gap-4 mt-8">
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
          <span className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold">
            <img className="w-6 h-6" src="public\html.png" alt="" /> HTML
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
