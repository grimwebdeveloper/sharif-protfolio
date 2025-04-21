import { useRef } from 'react';
import Heading from '../Heading/Heading';
import SingleProject from './SingleProject';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const element = useRef(null);
  const elementPin = useRef(null);

  useGSAP(() => {
    gsap.to(element.current, {
      x: '-90%',
      duration: 3,
      scrollTrigger: {
        trigger: elementPin.current,
        start: 'top 5%',
        end: 'top -100%',
        scrub: 1.5,
        markers: true,
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
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </div>
      </div>
    </div>
  );
}

export default Projects;
