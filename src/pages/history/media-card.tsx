import { Fragment, useState } from 'react';

import {
	Box,
	Breadcrumbs,
	Card,
	CardContent,
	Chip,
	Icon,
	IconButton,
	Modal,
	Tooltip,
	Typography,
	emphasize,
	styled,
} from '@mui/material';

import { DeleteMediaConfirmation } from '../media/delete-media-confirmation';
import { MediaForm, defaultMedia } from '../media/media-form';

export type MediaCardAttr = {
	media: any;
	refresh?: VoidFunction;
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];

	return {
		backgroundColor,
		height: theme.spacing(3),
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover, &:focus': {
			backgroundColor: emphasize(backgroundColor, 0.06),
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
}) as typeof Chip;

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	borderRadius: '8px',
	bgcolor: 'background.paper',
	boxShadow: 24,
	overflow: 'hidden',
};

export const MediaCard = ({ media, refresh }: MediaCardAttr) => {
	const [isDeleting, setDeleting] = useState(false);
	const [isEditing, setEditing] = useState(false);

	const onDelete = () => {
		setDeleting(true);
	};

	const onEdit = () => {
		setEditing(true);
	};

	return (
		<Fragment>
			<Card>
				<Box sx={{ display: 'flex' }}>
					<CardContent sx={{ flex: 1 }}>
						<Typography gutterBottom>{media?.title}</Typography>

						<Typography gutterBottom color="text.secondary">
							{new Date(media.date)?.toLocaleString('pt-Br')}
						</Typography>

						<Breadcrumbs aria-label="breadcrumb">
							<StyledBreadcrumb
								component="span"
								label={media?.type ? 'Série' : 'Filme'}
								icon={<Icon fontSize="small">movie</Icon>}
							/>

							<StyledBreadcrumb
								component="span"
								label={media?.category?.name ?? 'Categoria desconhecida'}
								icon={<Icon fontSize="small">theater_comedy</Icon>}
							/>
						</Breadcrumbs>
					</CardContent>

					<Box>
						<Tooltip title="Excluir">
							<IconButton onClick={onDelete} disabled={isDeleting} sx={{ color: 'secondary.main' }}>
								<Icon>delete</Icon>
							</IconButton>
						</Tooltip>

						<Tooltip title="Editar">
							<IconButton onClick={onEdit} sx={{ color: 'primary.main' }}>
								<Icon>edit</Icon>
							</IconButton>
						</Tooltip>
					</Box>
				</Box>
			</Card>

			<Modal open={isEditing} onClose={() => setEditing(false)}>
				<Box sx={style}>
					<Box sx={{ p: '8px 24px', display: 'flex', alignItems: 'center' }} bgcolor="primary.main" color="white">
						<Typography sx={{ flex: 1 }} variant="h6">
							Editar mídia
						</Typography>

						<IconButton onClick={() => setEditing(false)} color="inherit">
							<Icon>close</Icon>
						</IconButton>
					</Box>

					<Box sx={{ p: '24px' }}>
						<MediaForm
							onSuccess={() => {
								refresh && refresh();
								setEditing(false);
							}}
							media={defaultMedia(media)}
						/>
					</Box>
				</Box>
			</Modal>

			<DeleteMediaConfirmation
				open={isDeleting}
				onClose={() => {
					refresh && refresh();
					setDeleting(false);
				}}
				media={media}
			></DeleteMediaConfirmation>
		</Fragment>
	);
};
