import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TemporaryDrawer } from '../drawer/drawer';

export function Navbar() {
	const [open, setOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};
	return (
		<React.Fragment>
			<AppBar>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={toggleDrawer(true)}
					>
						<Icon style={{ color: 'white' }}>menu</Icon>
					</IconButton>

					<Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
						Menu
					</Typography>
				</Toolbar>
			</AppBar>

			<TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
		</React.Fragment>
	);
}
