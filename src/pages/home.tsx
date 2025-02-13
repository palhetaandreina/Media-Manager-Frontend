import { useState } from 'react';

import { AppBar, Box, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { TemporaryDrawer } from '../components/drawer/drawer';

export function HomePage() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<div>
			<Box>
				<AppBar>
					<Toolbar>
						<IconButton onClick={toggleDrawer(true)}>
							<Icon style={{ color: 'white' }}>menu</Icon>
						</IconButton>

						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Menu
						</Typography>
					</Toolbar>
				</AppBar>

				<TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
			</Box>
		</div>
	);
}
