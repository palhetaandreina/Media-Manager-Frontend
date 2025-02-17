import HourChartOverview from '../components/drawer/charts/chart-hour';
import { Navbar } from '../components/navbar/navbar';

import '../style/chart.css';

export function HomePage() {
	return (
		<div>
			<Navbar />
			<div className="chart-style">
				<HourChartOverview />
			</div>
		</div>
	);
}
