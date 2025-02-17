import {
	Box,
	Button,
	CssBaseline,
	FormControl,
	Grid2,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
	Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';

export function RegisterMedia() {
	const [mediaType, setMediaType] = useState<string>();
	const [category, setCategory] = useState<string>();

	const categoryChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value);
	};

	const handleChange = (event: SelectChangeEvent) => {
		setMediaType(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<Navbar />

			<Box component="main" sx={{ padding: '24px', width: '100vw' }}>
				<Toolbar />

				<Box
					sx={{
						maxWidth: 400,
						justifyContent: 'center',
						margin: 'auto',
						gap: '24px',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Grid2 container spacing={2}>
						<Grid2 size={6}>
							<FormControl fullWidth>
								<InputLabel id="media-type-label">Tipo</InputLabel>
								<Select
									value={(mediaType ?? '') as string}
									labelId="media-type-label"
									label="Tipo"
									onChange={handleChange}
								>
									<MenuItem value="0">Filme</MenuItem>
									<MenuItem value="1">Série</MenuItem>
								</Select>
							</FormControl>
						</Grid2>

						<Grid2 size={6}>
							<FormControl fullWidth>
								<InputLabel id="media-type-label">Categoria</InputLabel>
								<Select value={category} labelId="media-type-label" label="Categoria" onChange={categoryChange}>
									<MenuItem value="acao">Ação</MenuItem>
									<MenuItem value="terror">Terror</MenuItem>
								</Select>
							</FormControl>
						</Grid2>

						<Grid2 size={12}>
							<TextField fullWidth id="outlined-adornment-amount" label="Título" variant="outlined" />
						</Grid2>

						<Grid2 size={6}>
							<TextField
								id="outlined-number"
								label="Duração"
								placeholder="0:00"
								type="number"
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								fullWidth
							/>
						</Grid2>

						<Grid2 size={6}>
							<TextField
								id="outlined-number"
								label="Data"
								variant="outlined"
								type="date"
								slotProps={{
									inputLabel: {
										shrink: true,
									},
								}}
								fullWidth
							/>
						</Grid2>
						<Grid2 size={12}>
							<Button variant="contained" color="secondary" sx={{ width: '100%' }}>
								Registrar
							</Button>
						</Grid2>
					</Grid2>
				</Box>
			</Box>
		</Box>
	);
}
