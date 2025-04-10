import GitHubButton from '../../Global/GitHubButton';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b-[0px] border-b-white h-20 relative">
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

      <ul className="mobile-navbar absolute top-0 right-0 h-screen flex flex-col items-center gap-6  justify-center z-50 w-[75%]  backdrop-blur-[16px]  backdrop-saturate-[180%]  bg-[rgba(0,0,0,0.4)]  border border-[rgba(209,213,219,0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:hidden">
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
        <li className="nav-link absolute top-10 right-4 translate-y-[-30%]">
          <a href="#">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                fill="#ffffff"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
