import { ThemeProvider } from '@emotion/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Cadastrar" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
