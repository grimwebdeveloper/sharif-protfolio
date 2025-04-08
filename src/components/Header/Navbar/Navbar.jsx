function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-blue-950">
      <h1 className="inline-block text-2xl font-black">SHARIF</h1>

      <ul className="nav-links gap-4 hidden">
        <li className="nav-link">
          <a href="#">HOME</a>
        </li>
        <li className="nav-link">
          <a href="#">SKILLS</a>
        </li>
        <li className="nav-link">
          <a href="#">PROJECTS</a>
        </li>
        <li className="nav-link">
          <a href="#">EXPERIENCE</a>
        </li>
        <li className="nav-link">
          <a href="#">ABOUT US</a>
        </li>
        <li className="nav-link">
          <a href="#">HIRE ME</a>
        </li>
      </ul>

      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z"
          fill="#ffffff"
        />
      </svg>
    </nav>
  );
}

export default Navbar;
