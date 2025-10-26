import Header from './components/Header';
import HeaderBg from './components/HeaderBg';
import Sidebar from './components/Sidebar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import SkillsAndTools from './components/SkillsAndTools';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<HeaderBg />
			<Introduction />
			<SkillsAndTools />
			{/* <Sidebar />
			<Projects />
			<SkillsAndTools />
			<Footer /> */}
		</>
	);
};

export default App;
