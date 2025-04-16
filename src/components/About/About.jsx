import AboutContent from './AboutContent';
import AboutHeading from './AboutHeading';

function About() {
  return (
    <>
      <AboutHeading />
      <div className="max-w-[1440px] mx-auto text-white p-6 pt-0">
        <AboutContent />
      </div>
    </>
  );
}

export default About;
