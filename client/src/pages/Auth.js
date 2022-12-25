import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useLocation } from 'react-router-dom';
import "../pages/style.css"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';


const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Form>
      <div className="authlogin">
        <b>{isLogin ? 'Вход в аккаунт' : "Регистрация аккаунта"}</b>
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите ваш email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите ваш пароль" />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isLogin ? 'Войти' : "Регистрация"}
      </Button>
      {isLogin ?
        <Button variant="primary" className="buttonreg" type="submit">
          <NavLink to={REGISTRATION_ROUTE}>
            Зарегистрироваться
          </NavLink>
        </Button>
        :
        <Button variant="primary" className="buttonreg" type="submit">
          <NavLink to={LOGIN_ROUTE}>
            Вход
          </NavLink>
        </Button>
      }
    </Form>
  );
};

export default Auth;