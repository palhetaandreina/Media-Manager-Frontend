import { Button, FormControl, Grid2 as Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Backend } from '../../lib/backend';
import { options } from '../../lib/toastify/toastify.constants';
import { Category } from '../../type/category.type';
import { Media } from '../../type/media.type';

export type MediaFormAttr = {
	media: Media;
	onSuccess?: (media: Media) => void;
	onFailure?: (media: Media, err: Error) => void;
};

export const defaultMedia = (media?: Record<string, any>): Media => {
	return {
		id: media?.id ?? undefined,
		type: media?.type ? 1 : 0,
		category: media?.category?.id ?? undefined,
		title: media?.title ?? '',
		duration: media?.duration ?? undefined,
		date: media?.date ?? new Date(),
	};
};

export const MediaForm = ({ media, onSuccess, onFailure }: MediaFormAttr) => {
	const [categories, setCategories] = useState<Category[]>([]);

	const [state, setState] = useState<Media>(media);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		new Backend()
			.updateMedia(state)
			.then((response) => {
				const message = 'Mídia cadastrada com sucesso';

				toast.success(message, options);

				const media = {
					...response,
					user: response?.user.id,
					category: response?.category.id,
				};

				onSuccess && onSuccess(media);
			})
			.catch((e) => {
				const message = e.status === 400 ? e?.response?.data?.message?.at(0) : 'Não foi possível cadastrar mídia';

				toast.error(message, options);
				onFailure && onFailure(media, e);
			});
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// target = elemento que causou o evento

		setState((state) => ({
			...state,
			[e.target.id]: e.target.value,
		}));
	};

	useEffect(() => {
		new Backend()
			.getCategories()
			.then((categories) => setCategories(categories))
			.catch((e) => {
				toast.error('Não foi possível listar as categorias', options);
				console.error(e.message);
			});
	}, []);

	return (
		<form onSubmit={onSubmit}>
			<Grid container spacing={2}>
				<Grid size={12}>
					<TextField
						fullWidth
						onChange={onChange}
						value={state.title}
						id="title"
						label="Título"
						variant="outlined"
						required
					/>
				</Grid>

				<Grid size={6}>
					<FormControl fullWidth>
						<InputLabel id="media-type-label">Tipo</InputLabel>

						<Select
							labelId="media-type-label"
							label="Tipo"
							value={state.type}
							onChange={(e) => setState((state) => ({ ...state, type: Number(e.target.value) }))}
							required
						>
							<MenuItem value={0}>Filme</MenuItem>
							<MenuItem value={1}>Série</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid size={6}>
					<FormControl fullWidth>
						<InputLabel id="media-type-label">Categoria</InputLabel>

						<Select
							value={state.category}
							labelId="media-type-label"
							label="Categoria"
							onChange={(e) => setState((state) => ({ ...state, category: Number(e.target.value) }))}
							required
						>
							{categories?.map((i) => {
								return <MenuItem value={i.id}>{i.name}</MenuItem>;
							})}
						</Select>
					</FormControl>
				</Grid>

				<Grid size={6}>
					<TextField
						value={state.duration}
						onChange={onChange}
						id="duration"
						label="Duração"
						placeholder="0:00"
						type="number"
						slotProps={{
							inputLabel: {
								shrink: true,
							},
						}}
						fullWidth
						required
					/>
				</Grid>

				<Grid size={6}>
					<TextField
						value={state.date}
						onChange={onChange}
						id="date"
						label="Data"
						placeholder="mm/dd/yy"
						fullWidth
						required
					/>
				</Grid>

				<Grid size={12}>
					<Button variant="contained" type="submit" color="secondary" sx={{ width: '100%' }}>
						Registrar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};
