import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

import { Box, CssBaseline, Toolbar } from '@mui/material';

import { Navbar } from '../../components/navbar/navbar';
import { MediaForm, defaultMedia } from './media-form';

export function RegisterMediaPage() {
	return (
		<Fragment>
			<ToastContainer />

			<Box sx={{ display: 'flex', margin: 'auto' }}>
				<CssBaseline />

				<Navbar title="Adicionar mídia" />

				<Box component="main" sx={{ padding: '24px', boxSizing: 'border-box', width: '100vw' }}>
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
						<MediaForm media={defaultMedia()} />
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
}
