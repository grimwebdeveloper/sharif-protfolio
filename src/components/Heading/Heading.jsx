function Heading({title, tagline}) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold lg:w-[352px] bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
        {title}
      </h2>
      <p className="text-lg mt-4 italic text-zinc-400 lg:w-[352px]">
        {tagline}
      </p>
    </div>
  );
}

export default Heading;
