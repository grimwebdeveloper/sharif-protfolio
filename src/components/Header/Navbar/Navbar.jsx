import GitHubButton from '../../Global/GitHubButton';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b-2 border-b-white h-20 relative">
      <h1 className="inline-block text-2xl font-black">SHARIF</h1>

      <ul className="nav-links hidden gap-4 md:flex items-center">
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
          <a href="#">
            <GitHubButton text="Hire Me" />
          </a>
        </li>
      </ul>

      <svg
        className="md:hidden"
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

      <ul className="mobile-navbar absolute bg-black top-0 right-0 h-screen flex flex-col items-center gap-6  justify-center z-50" style={{
        width: '75%',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(209, 213, 219, 0.3)',
        background: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <li className="nav-link text-2xl p-4">
          <a href="#">HOME</a>
        </li>
        <li className="nav-link text-2xl p-4">
          <a href="#">SKILLS</a>
        </li>
        <li className="nav-link text-2xl p-4">
          <a href="#">PROJECTS</a>
        </li>
        <li className="nav-link text-2xl p-4">
          <a href="#">EXPERIENCE</a>
        </li>
        <li className="nav-link text-2xl p-4">
          <a href="#">ABOUT US</a>
        </li>
        <li className="nav-link">
          <a href="#">
            <GitHubButton text="Hire Me" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
