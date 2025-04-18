function Navbar() {
  return (
    <>
    <nav className="h-24 flex justify-between items-center my-container outline">

      <h1>
        <a className="gradient-text text-4xl font-bold" href="#">SHARIF</a>
      </h1>

      <ul className="hidden lg:flex items-center gap-2">
        <li className="active:scale-90 duration-300"><a className="py-2 px-2 text-xl font-semibold gradient-text-hover" href="#">HOME</a></li>
        <li className="active:scale-90 duration-300"><a className="py-2 px-2 text-xl font-semibold gradient-text-hover" href="#skills">SKILLS</a></li>
        <li className="active:scale-90 duration-300"><a className="py-2 px-2 text-xl font-semibold gradient-text-hover" href="#projects">PROJECTS</a></li>
        <li className="active:scale-90 duration-300"><a className="py-2 px-2 text-xl font-semibold gradient-text-hover" href="#experience">EXPERIENCE</a></li>
        <li className="active:scale-90 duration-300"><a className="py-2 px-2 text-xl font-semibold gradient-text-hover" href="#about-me">ABOUT ME</a></li>
        <li className="active:scale-90 duration-300"><a className="py-2 px-6 text-xl font-semibold" id="hireme-btn" href="#hire-me">HIRE ME</a></li>
      </ul>

      <svg className="lg:hidden" width="28" height="28" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z" fill="#ffffff"/></svg>

    </nav>

    <div id="small-navbar"></div>

    </>
  )
}

export default Navbar