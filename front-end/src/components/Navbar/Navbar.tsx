import { useContext, useEffect, useState } from 'react'

import { Container } from './styles'

import Logo from '../../assets/Images/home_images/logo.svg'

import { FaRegUserCircle } from "react-icons/fa"

import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {

  const { dispatch } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: "LOGOUT" });
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Container>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        {user ? (
          <>
            <div className='logged-user'>
              <div>
                <div className='user-content'>
                  <p> <FaRegUserCircle className='icon' /> </p>
                  <p> {user.username} </p>
                </div>
              </div>
              <div>
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </>
        ) : (
          <div className='button-container'>
            <Link to="/login">
              <button className='login-btn'>
                Entrar
              </button>
            </Link>
            <Link to="/register">
              <button className='register-btn'>
                Registrar-se
              </button>
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Navbar;