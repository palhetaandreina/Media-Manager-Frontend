import { Box, Grid2, Toolbar } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react/jsx-runtime';
import { CategoriesChart } from '../../components/charts/categories-chart';
import { HoursChart } from '../../components/charts/hours-chart';
import { Navbar } from '../../components/navbar/navbar';

export function DashboardPage() {
	return (
		<Fragment>
			<ToastContainer />
			<Box>
				<Navbar />
				<Box>
					<Toolbar />

					<Grid2 container>
						<Grid2 size={6}>
							<HoursChart />
						</Grid2>

						<Grid2 size={6}>
							<CategoriesChart />
						</Grid2>
					</Grid2>
				</Box>
			</Box>
		</Fragment>
	);
}
