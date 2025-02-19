import { Button, TextField, Typography } from '@mui/material';
import '../style/style.css';

export function RegisterUser() {
	return (
		<div className="container">
			<div className="title">
				<Typography variant="h3">Cadastre-se</Typography>
			</div>

			<div className="card-inputs">
				<div className="input">
					<TextField id="outlined-basic" label="Nome" variant="outlined" />
				</div>

				<div className="input">
					<TextField id="outlined-basic" label="Email" variant="outlined" />
				</div>

				<div className="input">
					<TextField id="outlined-basic" label="Senha" variant="outlined" />
				</div>

				<div className="input">
					<Button variant="contained" color="secondary">
						Cadastrar
					</Button>
				</div>
			</div>
		</div>
	);
}
