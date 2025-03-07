import { useEffect, useState } from 'react';

import { BarChart, axisClasses } from '@mui/x-charts';

import { Backend } from '../../lib/backend';

export function CategoriesChart() {
	const [dataset, setDateset] = useState<Record<string, any>>([]);

	const keys = Object.keys(dataset);

	useEffect(() => {
		new Backend()
			.getCategoriesStats()
			.then((response) => {
				console.log(response);
				setDateset(response);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const seriesData = Object.values(keys).map((key) => {
		return {
			data: [dataset[key].filmes ?? 0, dataset[key].series ?? 0],
		};
	});

	console.log(keys, seriesData);

	const chartSetting = {
		yAxis: [
			{
				label: 'Categorias',
			},
		],
		series: seriesData,
		height: 300,
		sx: {
			[`& .${axisClasses.directionY} .${axisClasses.label}`]: {
				transform: 'translateX(-10px)',
			},
		},
	};
	return <BarChart xAxis={[{ scaleType: 'band', data: keys }]} {...chartSetting} />;
}
