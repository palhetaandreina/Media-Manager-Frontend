import { Box, CssBaseline, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';

export function RegisterMedia() {
	const [mediaType, setMediaType] = useState<string>();

	const handleChange = (event: SelectChangeEvent) => {
		setMediaType(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Navbar />

			<Box component="main" sx={{ padding: '24px', width: '100vw' }}>
				<Toolbar />

				<FormControl fullWidth>
					<InputLabel id="media-type-label">Tipo</InputLabel>
					<Select value={(mediaType ?? '') as string} labelId="media-type-label" label="Tipo" onChange={handleChange}>
						<MenuItem value="0">Filme</MenuItem>
						<MenuItem value="1">Série</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
}
