import { Button, Checkbox, TextField } from '@mui/material';

export function Login() {
  return (
    <div>
      <div className="input">
        <TextField id="outlined-basic" label="Usuário" variant="outlined" />
      </div>
      <div className="input">
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
      </div>
      <div className="input">
        <Button variant="contained" color="secondary">
          Entrar
        </Button>
      </div>
      <div>
        <Checkbox defaultChecked />
      </div>
    </div>
  );
}
