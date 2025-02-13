import { ThemeProvider } from '@emotion/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/Cadastro" element={<Register />} />
					<Route path="/Home" element={<HomePage />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
