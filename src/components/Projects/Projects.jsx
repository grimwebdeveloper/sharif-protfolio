import { useRef } from 'react';
import Heading from '../Heading/Heading';
import SingleProject from './SingleProject';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const projects = [
  {
    id: 1,
    title: 'Qurasphere',
    techStack: ['React', 'Tailwind CSS', 'JavaScript', 'HTML'],
    image: '/pro1.png',
    description:
      'Developed a 4-page animated landing page with smooth scroll effects, transitions, and responsive layout.',
  },
  {
    id: 2,
    title: 'Refokus',
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    image: '/pro2.png',
    description:
      'Created a dynamic portfolio-style web application with advanced animations, reusable components, and a clean modern UI.',
  },
  {
    id: 3,
    title: 'CineVerse',
    techStack: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    image: '/pro3.png',
    description:
      'Built a movie browsing application with API data fetching, search functionality, and interactive UI for better user experience.',
  },
];

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const element = useRef(null);
  const elementPin = useRef(null);

  useGSAP(() => {
    gsap.to(element.current, {
      x: '-65%',
      duration: 3,
      scrollTrigger: {
        trigger: elementPin.current,
        start: 'top 2.5%',
        end: 'top -250%',
        scrub: 1.5,
        // markers: true,
        pin: true,
      },
    });
  });

  return (
    <div
      ref={elementPin}
      id="projects"
      className="my-container flex flex-col gap-8 lg:flex-row overflow-hidden"
    >
      <Heading title="Projects" tagline="Turning code into career stories" />
      <div className="flex flex-row gap-8 items-center overflow-hidden">
        <div
          ref={element}
          className="flex flex-row gap-8 items-center hireme-effect"
        >
          {projects.map((project) => (
            <SingleProject key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
