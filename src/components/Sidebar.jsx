import { useContext } from 'react';
import { SidebarContext } from '../context/Contexts';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarLinks from './Sidebar/SidebarLinks';
import SidebarSocials from './Sidebar/SidebarSocials';

const Sidebar = () => {
	const { isSidebarActive } = useContext(SidebarContext);
	return (
		<aside
			className={`transition-all rounded-tl-[40%] fixed top-0 right-0 w-full h-svh bg-white/0 backdrop-blur-3xl px-4 ${
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
