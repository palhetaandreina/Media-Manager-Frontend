import { ThemeProvider } from '@emotion/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { Login } from './pages/login';
import { RegisterMedia } from './pages/register-media';
import { RegisterUser } from './pages/register-user';
import { Showcase } from './pages/showcase/showcase';
import { theme } from './theme';

import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/user/register" element={<RegisterUser />} />
					<Route path="/Home" element={<HomePage />} />
					<Route path="/media/register" element={<RegisterMedia />} />
					<Route path="/showcase" element={<Showcase />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
