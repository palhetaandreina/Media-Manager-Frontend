import { ThemeProvider } from '@emotion/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HistoryPage } from './pages/history';
import { Login } from './pages/login';
import { RegisterMediaPage } from './pages/media/register-media';
import { RegisterUser } from './pages/register-user';
import { Showcase } from './pages/showcase/showcase';
import { theme } from './theme';

import './App.css';
import { DashboardPage } from './pages/dashboard';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/history" element={<HistoryPage />} />
					<Route path="/user/register" element={<RegisterUser />} />
					<Route path="/media/register" element={<RegisterMediaPage />} />
					<Route path="/showcase" element={<Showcase />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
