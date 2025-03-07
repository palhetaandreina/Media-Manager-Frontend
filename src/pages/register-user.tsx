import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { Button, TextField, Typography } from '@mui/material';

import { User } from '../type/user.type';

import { Backend } from '../lib/backend';
import { options } from '../lib/toastify/toastify.constants';
import '../style/style.css';

export function RegisterUser() {
	const navigate = useNavigate();

	const [state, setState] = useState<User>({
		name: '',
		email: '',
		password: '',
	});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		new Backend()
			.updateUser(state)
			.then(() => {
				const message = 'Usuário cadastrado com sucesso!';

				toast.success(message, {
					onClose: () => navigate('/'),
					...options,
				});
			})
			.catch((e) => {
				const message = e.status === 400 ? e?.response?.data?.message?.at(0) : 'Não foi possível cadastrar o usuário';

				toast.error(message, options);
			});
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// target = elemento que causou o evento

		setState((state) => ({
			...state,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<div className="container">
			<ToastContainer />

			<div className="title">
				<Typography variant="h3">Cadastre-se</Typography>
			</div>

			<div className="card-inputs">
				<form onSubmit={onSubmit}>
					<div className="input">
						<TextField value={state.name} onChange={onChange} id="name" label="Nome" variant="outlined" required />
					</div>

					<div className="input">
						<TextField value={state.email} onChange={onChange} id="email" label="Email" variant="outlined" required />
					</div>

					<div className="input">
						<TextField
							value={state.password}
							onChange={onChange}
							id="password"
							type="password"
							label="Senha"
							variant="outlined"
							required
						/>
					</div>

					<div className="input">
						<Button variant="contained" type="submit" color="secondary">
							Cadastrar
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
