import { Box, Drawer, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

type DrawerListMenuItem = {
	text: string;
	icon: string;
};

type TemporaryDrawerAttr = {
	open: boolean;
	toggleDrawer: (open: boolean) => VoidFunction;
};

export function TemporaryDrawer({ open, toggleDrawer }: TemporaryDrawerAttr) {
	const items: DrawerListMenuItem[] = [
		{
			text: 'Dashboard',
			icon: 'bar_chart',
		},
		{
			text: 'Nova Mídia',
			icon: 'movie',
		},
		{
			text: 'Editar conta',
			icon: 'account_circle',
		},
		{
			text: 'Sair',
			icon: 'logout',
		},
	];

	const DrawerList = (
		<Box>
			<List>
				{items.map((item) => (
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<Icon>{item.icon}</Icon>
							</ListItemIcon>

							<ListItemText>{item.text}</ListItemText>
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
