import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Icon } from '@mui/material';

export const Navigation = () => {
	const [value, setValue] = useState(0);

	return (
		<BottomNavigation
			showLabels
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="Recents" icon={<Icon>home</Icon>} />
			<BottomNavigationAction label="Favorites" icon={<Icon>bar_chart</Icon>} />
			<BottomNavigationAction label="Nearby" icon={<Icon>history</Icon>} />
			<BottomNavigationAction label="Nearby" icon={<Icon>history</Icon>} />
		</BottomNavigation>
	);
};
