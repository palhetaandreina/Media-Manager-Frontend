import { Box, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

type DrawerListMenuItem = {
	text: string;
	icon: string;
	location: string;
};

type TemporaryDrawerAttr = {
	open: boolean;
	toggleDrawer: (open: boolean) => VoidFunction;
};

export function TemporaryDrawer({ open, toggleDrawer }: TemporaryDrawerAttr) {
	const items: DrawerListMenuItem[] = [
		{
			text: 'Home',
			icon: 'home',
			location: '/home',
		},
		{
			text: 'Dashboard',
			icon: 'bar_chart',
			location: '/dashboard',
		},
		{
			text: 'Histórico',
			icon: 'history',
			location: '/history',
		},
		{
			text: 'Sair',
			icon: 'logout',
			location: '/',
		},
	];

	const DrawerList = (
		<Box>
			<List>
				{items.map((item) => (
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Icon>{item.icon}</Icon>
							</ListItemIcon>

							<ListItemText>
								<Link to={item.location}>{item.text}</Link>
							</ListItemText>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Drawer open={open} onClick={toggleDrawer(false)}>
			{DrawerList}
		</Drawer>
	);
}
