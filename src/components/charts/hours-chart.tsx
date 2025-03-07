import { useEffect, useState } from 'react';

import { LineChart, axisClasses } from '@mui/x-charts';

import { Backend } from '../../lib/backend';

export function HoursChart() {
	const [dataset, setDateset] = useState<{ date: string; value: number }[]>([]);

	useEffect(() => {
		const from = new Date();
		from.setMonth(from.getMonth() - 12);
		from.setDate(1);

		const to = new Date();

		new Backend()
			.getHoursStats('month', from, to)
			.then((response) => {
				const data = [];

				const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

				const map = new Map<string, number>(Object.entries(response));

				let aux = new Date(from);

				do {
					const key = aux.toISOString().slice(0, 7);

					const minutes: number = map.has(key) ? map.get(key)! : 0;

					data.push({
						date: `${aux.getFullYear()} ${months[aux.getMonth()]}`,
						value: minutes / 60,
					});

					aux.setMonth(aux.getMonth() + 1);
				} while (aux.getTime() < to.getTime());

				setDateset(data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const chartSetting = {
		yAxis: [
			{
				label: 'Tempo assistido (horas)',
			},
		],
		series: [{ dataKey: 'value', label: 'Total de horas' }],
		height: 300,
		sx: {
			[`& .${axisClasses.directionY} .${axisClasses.label}`]: {
				transform: 'translateX(-10px)',
			},
		},
	};
	return <LineChart dataset={dataset} xAxis={[{ scaleType: 'band', dataKey: 'date' }]} {...chartSetting} />;
}
