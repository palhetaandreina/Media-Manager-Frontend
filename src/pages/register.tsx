import { Button, TextField, Typography } from '@mui/material';
import '../style/style.css';

export function Register() {
  return (
    <div>
      <div>
        <Typography variant="h3">Cadastre-se</Typography>
      </div>
      <div>
        <div className="input">
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
        </div>
        <div className="input">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div className="input">
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
}
