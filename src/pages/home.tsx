import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

export function HomePage() {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar>
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
						<Button color="inherit">Logout</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}
