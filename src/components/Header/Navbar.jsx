function Navbar() {
  return (
    <nav className="flex justify-between items-center">

      <div className="logo">
        <h1 className="inline-block">SHARIF</h1>
        <sub> 12:00</sub>
      </div>

      <ul className="nav-links flex gap-4">
        <li className="nav-link"><a href="#">HOME</a></li>
        <li className="nav-link"><a href="#">SKILLS</a></li>
        <li className="nav-link"><a href="#">PROJECTS</a></li>
        <li className="nav-link"><a href="#">EXPERIENCE</a></li>
        <li className="nav-link"><a href="#">ABOUT US</a></li>
        <li className="nav-link"><a href="#">HIRE ME</a></li>
      </ul>

    </nav>
  )
}

export default Navbar