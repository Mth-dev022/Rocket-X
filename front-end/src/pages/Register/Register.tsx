import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from '../Login/style'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    try {
      await axios.post("https://quizz-back-end.onrender.com/api/auth/register", {
        username,
        email,
        password
      });
      toast.success('Registrado com sucesso');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setError('Ocorreu um erro ao tentar se registrar. Por favor, tente novamente.');
      console.error(error);
    }
  };

  return (
    <Container>
      <div id="signin">
        <form onSubmit={handleSubmit}>
          <div className="form-title">Registrar-se</div>
          <div className={`input-field ${username ? 'not-empty' : ''}`}>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={handleUsername}
            />
            <label htmlFor="username">Nome</label>
          </div>
          <div className={`input-field ${email ? 'not-empty' : ''}`}>
            <input
              type="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={`input-field ${password ? 'not-empty' : ''}`}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
            />
            <label htmlFor="password">Senha</label>
          </div>
          <div className={`input-field ${confirmPassword ? 'not-empty' : ''}`}>
            <input
              type="password"
              id="confirm-password"
              autoComplete="off"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
            <label htmlFor="confirm-password">Confirmar senha</label>
          </div>
          {<span className='error-message'>{error}</span>}
          <button type='submit' className="login">
            Registrar
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2200}
      />
    </Container>
  );
};

export default Register;
