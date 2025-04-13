import AboutContent from './AboutContent';
import AboutHeading from './AboutHeading';

function About() {
  return (
    <div className='max-w-[1440px] mx-auto text-white p-6 pt-0'>
      <AboutHeading />
      <AboutContent />
    </div>
  );
}

export default About;
