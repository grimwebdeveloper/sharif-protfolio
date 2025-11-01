import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx';
import SidebarProvider from './context/SidebarProvider.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SidebarProvider>
			<App />
		</SidebarProvider>
	</StrictMode>
);
