import { BarChart } from '@mui/x-charts';

export default function HourChartOverview() {
	return (
		<div>
			<BarChart
				series={[
					// Ordenadas
					{ data: [15, 40, 90, 100] },
				]}
				height={300}
				width={400}
				xAxis={[{ data: ['S1', 'S2', 'S3', 'S4'], scaleType: 'band', dataKey: 'month' }]}
				margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
			/>
		</div>
	);
}
