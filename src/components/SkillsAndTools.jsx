import { Fragment } from 'react';
import { skillsAndToolsContent } from './data';
import SkillsAndToolsContent from './SkillAndTools/SkillsAndToolsContent';

const SkillsAndTools = () => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-32'>
			<h2 className='font-black text-5xl mb-12'>Skills/Tools</h2>
			<SkillsAndToolsContent />
		</section>
	);
};

export default SkillsAndTools;
