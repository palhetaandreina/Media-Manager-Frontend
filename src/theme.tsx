import { createTheme } from '@mui/material/styles';

export function theme() {
	return createTheme({
		palette: {
			primary: {
				main: '#9c27b0',
				dark: '#6d1b7b',
				light: '#af52bf',
			},
			secondary: {
				main: '#f50057',
				dark: '#ab003c',
				light: '#f73378',
			},
		},
	});
}
