import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const openBar = useRef(null);
  const smallNavbar = useRef(null);
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const aboutMe = useRef(null);
  const hireMe = useRef(null);
  const closeBar = useRef(null);

  useEffect(() => {
    if (openNavbar) {
      gsap.to(smallNavbar.current, {
        display: 'flex',
        translateX: '0%',
        ease: 'expo.inOut',
        duration: 0.75,
        onComplete: () => {
          gsap.to(
            [
              home.current,
              skills.current,
              projects.current,
              experience.current,
              aboutMe.current,
              hireMe.current,
            ],
            {
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
            }
          );
        },
      });
    } else {
      gsap.to(
        [
          home.current,
          skills.current,
          projects.current,
          experience.current,
          aboutMe.current,
          hireMe.current,
        ],
        {
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          onComplete: () => {
            gsap.to(smallNavbar.current, {
              translateX: '100%',
              ease: 'expo.inOut',
              duration: 0.75,
              display: 'none',
            });
          },
        }
      );
    }
  }, [openNavbar]);

  return (
    <>
      <nav className="h-24 flex justify-between items-center my-container relative">
        <h1>
          <a className="gradient-text text-4xl font-bold" href="#">
            SHARIF
          </a>
        </h1>

        <ul className="hidden lg:flex items-center gap-2">
          <li className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover"
              href="#"
            >
              HOME
            </a>
          </li>
          <li className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover"
              href="#skills"
            >
              SKILLS
            </a>
          </li>
          <li className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover"
              href="#experience"
            >
              EXPERIENCE
            </a>
          </li>
          <li className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover"
              href="#about-me"
            >
              ABOUT ME
            </a>
          </li>
          <li className="active:scale-75 duration-300 ml-8">
            <a
              className="py-2 px-6 text-xl font-semibold"
              id="btn-type1"
              href="#hire-me"
            >
              HIRE ME
            </a>
          </li>
        </ul>

        <svg
          ref={openBar}
          onClick={() => setOpenNavbar(true)}
          className="lg:hidden active:scale-75 duration-300"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z"
            fill="#ffffff"
          />
        </svg>

        <ul
          ref={smallNavbar}
          id="small-navbar"
          className="fixed lg:hidden top-0 right-0 h-screen w-[80%] bg-[rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center justify-center gap-8 translate-x-full z-10"
        >
          <li ref={home} className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover inline-block"
              href="#"
            >
              HOME
            </a>
          </li>
          <li ref={skills} className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover inline-block"
              href="#skills"
            >
              SKILLS
            </a>
          </li>
          <li ref={projects} className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover inline-block"
              href="#projects"
            >
              PROJECTS
            </a>
          </li>
          <li ref={experience} className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover inline-block"
              href="#experience"
            >
              EXPERIENCE
            </a>
          </li>
          <li ref={aboutMe} className="active:scale-75 duration-300">
            <a
              className="py-2 px-2 text-xl font-semibold gradient-text-hover inline-block"
              href="#about-me"
            >
              ABOUT ME
            </a>
          </li>
          <li ref={hireMe} className="active:scale-75 duration-300">
            <a
              className="py-2 px-6 text-xl font-semibold inline-block"
              id="btn-type1"
              href="#hire-me"
            >
              HIRE ME
            </a>
          </li>
          <li
            ref={closeBar}
            onClick={() => setOpenNavbar(false)}
            className="active:scale-75 duration-300 absolute top-10 right-8 translate-y-[-50%]"
          >
            <a href="#">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {' '}
                <path
                  d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
