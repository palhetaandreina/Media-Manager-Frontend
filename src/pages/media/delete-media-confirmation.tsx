import { toast } from 'react-toastify';

import { Box, Button, Card, CardActions, CardContent, Modal, Typography } from '@mui/material';

import { Backend } from '../../lib/backend';
import { options } from '../../lib/toastify/toastify.constants';
import { modalStyleOptions } from '../../modal-options';
import { Media } from '../../type/media.type';

export type DeleteMediaConfirmationAttr = {
	open: boolean;
	onClose: VoidFunction;
	media: Media;
};

export const DeleteMediaConfirmation = ({ open, onClose, media }: DeleteMediaConfirmationAttr) => {
	const onConfirm = () => {
		new Backend()
			.deleteMedia(media.id!)
			.then(() => toast.success('Mídia deletada com sucesso', options))
			.catch((e) => {
				console.log(e.message);
				toast.error('Não foi possível deletar mídia', options);
			})
			.finally(() => onClose());
	};

	return (
		<Modal open={open} onClose={onClose}>
			<Card sx={modalStyleOptions}>
				<CardContent>
					<Typography variant="h6" sx={{ mb: '20px' }}>
						Confirmar deleção
					</Typography>

					<Typography gutterBottom>
						Deseja mesmo excluir: <strong>{media.title}</strong>?
					</Typography>
				</CardContent>

				<CardActions>
					<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
						<Button onClick={onClose}>Cancelar</Button>

						<Button onClick={onConfirm} variant="contained">
							Confirmar
						</Button>
					</Box>
				</CardActions>
			</Card>
		</Modal>
	);
};
