import HourChartOverview from '../components/charts/chart-hour';
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
