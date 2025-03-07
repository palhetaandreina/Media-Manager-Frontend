import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { Backend } from '../lib/backend';
import { options } from '../lib/toastify/toastify.constants';

export function Login() {
	const navigate = useNavigate();

	const [state, setState] = useState({
		email: '',
		password: '',
		remember: false,
	});

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		new Backend()
			.login(state)
			.then((response) => {
				state.remember
					? // Salva a chave permanentemente no navegador
					  localStorage.setItem('token', response.access_token)
					: // Salva a chave enquanto a sessão durar
					  sessionStorage.setItem('token', response.access_token);

				navigate('/dashboard');
			})
			.catch((e) => {
				const message = e.status == '401' ? 'Usuário não encontrado' : 'Não foi possível realizar o login';
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

	const toggleRemember = () => {
		setState((state) => ({
			...state,
			remember: !state.remember,
		}));
	};

	useEffect(() => {
		const title = document.title;
		document.title = 'Login';

		return () => {
			document.title = title;
		};
	});

	return (
		<div className="container">
			<ToastContainer />

			<div className="title">
				<Typography variant="h3">Fazer login</Typography>
			</div>

			<form onSubmit={onSubmit}>
				<div className="card-inputs">
					<div className="input">
						<TextField value={state.email} onChange={onChange} id="email" label="Email" variant="outlined" />
					</div>

					<div className="input">
						<TextField
							value={state.password}
							onChange={onChange}
							id="password"
							label="Senha"
							variant="outlined"
							type="password"
						/>
					</div>

					<div style={{ display: 'flex', width: 300 }}>
						<FormControlLabel
							label="Lembre-se de mim"
							onChange={toggleRemember}
							control={<Checkbox value={state.remember} />}
						/>

						{/* <p>
							<Link to="/home" viewTransition>
								Esqueceu a senha
							</Link>
						</p> */}
					</div>

					<div className="input">
						<Button variant="contained" type="submit" color="secondary">
							Entrar
						</Button>
					</div>
				</div>
			</form>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<p>
					Não tem uma conta?&nbsp;
					<Link to="/user/register" viewTransition>
						clique aqui
					</Link>
				</p>
			</div>
		</div>
	);
}
