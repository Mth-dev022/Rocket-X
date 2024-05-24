import React, { useState, useContext } from 'react';
import { Container } from './style';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<any>('');

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const response = await axios.post("https://quizz-back-end.onrender.com/api/auth/login", {
        email,
        password
      });
      console.log(response.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
      setError('');
      navigate('/');
    } catch (error: any) {
      if (error.response) {
        // Erro de resposta do servidor
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
        setError(error.response.data);
      } else {
        // Erro de rede ou outro erro
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Ocorreu um erro. Por favor, tente novamente.' });
        setError('Ocorreu um erro. Por favor, tente novamente.');
      }
      console.error(error);
    }
  };

  return (
    <Container>
      <div id="signin">
        <div className="form-title">Sign in</div>
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
          <label htmlFor="password">Password</label>
        </div>
        {<span className='error-message'>{error}</span>}
        <button className="login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </Container>
  );
};
export default Login;
