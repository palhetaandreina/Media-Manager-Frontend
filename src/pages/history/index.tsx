import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Box, Button, Toolbar, Typography } from '@mui/material';

import { Navbar } from '../../components/navbar/navbar';
import { Backend } from '../../lib/backend';
import { Media } from '../../type/media.type';
import { MediaCard } from './media-card';

export const HistoryPage = () => {
	const [medias, setMedias] = useState<Media[]>([]);

	const getMedias = () => {
		const from = new Date();
		from.setDate(from.getDate() - 30);

		const to = new Date();

		new Backend()
			.getMedias(from, to)
			.then((response) => setMedias(response))
			.catch((e) => {
				console.error(e.message);
			});
	};

	useEffect(() => getMedias(), []);

	return (
		<Fragment>
			<ToastContainer />

			<Box>
				<Navbar title="Histórico" />

				<Box component="main" sx={{ padding: '24px', boxSizing: 'border-box', width: '100vw' }}>
					<Toolbar />

					<Box>
						<Box sx={{ marginBottom: '24px' }}>
							<Typography variant="h6">Assistidos recentemente</Typography>
							<Link to={'/media/register'}>
								<Button variant="outlined">Adicionar</Button>
							</Link>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
							{medias?.map((media) => {
								return <MediaCard key={media.id} media={media} refresh={getMedias} />;
							})}
						</Box>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
};
