import Heading from '../Heading/Heading';
import Skills from '../Skills/Skills';
import { data } from './data';

function SkillsAndTools() {
  const skillsAndTools = data;
  return (
    <div id='skills' className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title="Skills & Tools" tagline="The skills you need. The tools I’ve mastered. The developer your team deserves" />
      <div className="flex flex-col gap-8 items-center justify-center">
        {skillsAndTools.map((item) => (
          <Skills key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default SkillsAndTools;
