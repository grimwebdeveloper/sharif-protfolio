import { BackgroundBeamsWithCollision } from './background-beams-with-collision';
import FooterContent from './FooterContent';
import FooterCopyright from './FooterCopyright';
import FooterHeading from './FooterHeading';

function Footer() {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="max-w-[1440px] mx-auto px-4 py-8 bg-zinc-900 text-white">
        <FooterHeading />
        <FooterContent />
        <FooterCopyright />
      </footer>
    </BackgroundBeamsWithCollision>
  );
}

export default Footer;
