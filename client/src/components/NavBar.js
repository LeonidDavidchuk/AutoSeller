import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav'
import "../components/style.css"
import {observer} from "mobx-react-lite";
import { MAIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';




const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="NameNavbar" >Автомобили с пробегом</Navbar.Brand>
                <NavLink to={MAIN_ROUTE}>
                <img className="imgnavbar" src="https://vidi-automarket.com.ua/bundles/automarket/img/logo.png?v1.4.529" alt="img"/>
                </NavLink>
                <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2"/>
                <p className="number"> +38 (044) 503-33-53 </p>

                <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2"/>
                <p className="number"> +38 (095) 433-33-11 </p>

                <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2"/>
                <p className="number"> +38 (097) 403-29-59 </p>
                {user.isAuth ?
                <Nav>
                <Button className="login"> АВТОРИЗАЦИЯ </Button>
                <Button className="admin"> АДМИН </Button>
                </Nav>
                :
                <Nav>
                <Button className="login" onClick={() => user.setIsAuth(true)}> ВХОД </Button>
                </Nav>
                }
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
});


export default NavBar;