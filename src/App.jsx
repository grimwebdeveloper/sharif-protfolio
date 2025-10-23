import Footer from './components/Footer';
import Header from './components/Header';
import HeaderBg from './components/HeaderBg';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import SkillsAndTools from './components/SkillsAndTools';

const App = () => {
	return (
		<>
			<Header />
			<HeaderBg />
			<Sidebar />
			<Introduction />
			<SkillsAndTools />
			<Projects />
			<Footer />
		</>
	);
};

export default App;
