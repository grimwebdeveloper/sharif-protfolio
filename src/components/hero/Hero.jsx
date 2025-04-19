function Hero() {
  return (
    <div id="hero" className="my-container flex flex-col justify-center gap-32">
      <h2 className="flex flex-col text-[10.7vw] leading-none ">
        <div className="self-start">... Frontend</div>
        <div className="self-end">Developer ...</div>
      </h2>
      <div className="flex justify-center items-center gap-8">
        <button type="button" id="btn-type1">Resume</button>
        <button type="button" id="btn-type1">My Work</button>
      </div>
    </div>
  )
}

export default Hero