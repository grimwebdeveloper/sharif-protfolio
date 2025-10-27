import SkillsAndToolsContent from './SkillAndTools/SkillsAndToolsContent';

const SkillsAndTools = ({ heading, data }) => {
	return (
		<section className='max-w-7xl mx-auto px-4 py-32'>
			<h2 className='font-black text-5xl mb-12'>{heading}</h2>
			<SkillsAndToolsContent data={data} />
		</section>
	);
};

export default SkillsAndTools;
