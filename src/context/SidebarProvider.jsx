import { useState } from 'react';
import { SidebarContext } from './Contexts';

const SidebarProvider = ({ children }) => {
	const [isSidebarActive, setIsSidebarActive] = useState(false);
	return (
		<SidebarContext value={{ isSidebarActive, setIsSidebarActive }}>
			{children}
		</SidebarContext>
	);
};

export default SidebarProvider;
