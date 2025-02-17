import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';

export function Login() {
	return (
		<div>
			<div className="section-title">
				<Typography variant="h3">Fazer login</Typography>
			</div>

			<div className="card-inputs">
				<div className="input">
					<TextField id="outlined-basic" label="Usuário" variant="outlined" />
				</div>

				<div className="input">
					<TextField
						id="outlined-basic"
						label="Senha"
						variant="outlined"
						type="password"
						autoComplete="current-password"
					/>
				</div>

				<div style={{ display: 'flex' }}>
					<FormControlLabel label="Lembre-se de mim" control={<Checkbox defaultChecked />} />
					<p>Esqueceu a senha</p>
				</div>

				<div className="input">
					<Button variant="contained" color="secondary">
						Entrar
					</Button>
				</div>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<p>
					Não tem uma conta? <a href="">clique aqui</a>
				</p>
			</div>
		</div>
	);
}
