import Header from './components/Header';
import HeaderBg from './components/HeaderBg';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SkillsAndTools from './components/SkillsAndTools';
import Footer from './components/Footer';
import { currentLearningAndFuturePlans, skillsAndToolsContent } from './components/data';

const App = () => {
	
	return (
		<>
			<Header />
			<HeaderBg />
			<Introduction />
			<SkillsAndTools heading={'Skills/Tools'} data={skillsAndToolsContent}/>
			<Projects />
			<Sidebar />
			{/* <SkillsAndTools heading={'Current Learning/Future Plans'} data={currentLearningAndFuturePlans}/> */}
			<Footer />
		</>
	);
};

export default App;
