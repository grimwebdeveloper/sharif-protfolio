import { useContext } from 'react';
import SidebarHeader from './components/sidebar/SidebarHeader';
import SidebarLinks from './components/sidebar/SidebarLinks';
import SidebarSocials from './components/sidebar/SidebarSocials';
import { SidebarContext } from './context/Contexts';

const Sidebar = () => {
	const { isSidebarActive } = useContext(SidebarContext);
	return (
		<aside
			className={`transition-all fixed top-0 right-0 w-full h-svh bg-white px-4 z-50 ${
				isSidebarActive ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<SidebarHeader />
			<div className='flex flex-col justify-between h-[calc(100svh-60px)]'>
				<SidebarLinks />
				<SidebarSocials />
			</div>
		</aside>
	);
};

export default Sidebar;
