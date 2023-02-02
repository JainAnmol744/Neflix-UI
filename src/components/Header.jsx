import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../Assets/logo.png';

const Header = (props) => {
    const navigate = useNavigate();

  const Container = styled.div`
    padding : 0 4rem;
    .logo{
    img{
      height: 5rem;
    }
  }
    button{
      padding : 0.5rem 1rem;
      background-color: #e50914;
      color: white;
      cursor: pointer;
      border:none;
      border-radius: 0.5rem;
      font-weight: bolder;
    }
  `;

  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={()=> navigate(props.login ? "/login" : "/signup")}>{props.login? "Log In" : "Sign Up"}</button>
    </Container>
  )
}

export default Header