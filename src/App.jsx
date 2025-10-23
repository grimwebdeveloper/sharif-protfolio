import Footer from './components/Footer';
import Header from './components/Header';
import HeaderBg from './components/HeaderBg';
import Introduction from './components/Introduction';
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
			<Footer />
		</>
	);
};

export default App;
