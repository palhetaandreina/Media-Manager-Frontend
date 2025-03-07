import { Box, Card, CardContent, CardHeader, Rating, Typography } from '@mui/material';

import { Media } from '../../type/media.type';

type CardOptionsAttr = {
	media: Media;
	index?: number;
};

export function CardOptions({ media, index }: CardOptionsAttr) {
	if (!media.id) {
		return null;
	}

	const mediaTitle = `${index != undefined ? `${index}.` : null} ${media.title}`;
	const mediaType = media.type == 0 ? 'Filme' : 'Série';

	const title = (
		<Typography
			sx={{
				display: '-webkit-box',
				'-webkit-line-clamp': '1',
				'-webkit-box-orient': 'vertical',
				overflow: 'hidden',
			}}
		>
			{mediaTitle}
		</Typography>
	);

	return (
		<Card elevation={1} sx={{ margin: '20px', display: 'flex' }}>
			{/* <CardMedia sx={{ width: 120, height: 180 }} image={media.imageUrl} title={media.title} /> */}

			<Box sx={{ flex: 1 }}>
				<CardHeader title={title} subheader={mediaType} />

				<CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
					<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
						Duração: {media.duration} min
					</Typography>

					<Rating />
				</CardContent>
			</Box>
		</Card>
	);
}
