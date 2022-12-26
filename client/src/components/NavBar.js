import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Context } from '..';
import Nav from 'react-bootstrap/Nav'
import "../components/style.css"
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from '../utils/consts';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(ADMIN_ROUTE)
    }
        const handleClick1 = () => {
            navigate(LOGIN_ROUTE)
        }
            return (
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#" className="NameNavbar" >Автомобили с пробегом</Navbar.Brand>
                        <NavLink to={MAIN_ROUTE}>
                            <img className="imgnavbar" src="https://vidi-automarket.com.ua/bundles/automarket/img/logo.png?v1.4.529" alt="img" />
                        </NavLink>
                        <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2" />
                        <p className="number"> +38 (044) 503-33-53 </p>

                        <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2" />
                        <p className="number"> +38 (095) 433-33-11 </p>

                        <img className="imgphone" src="https://e7.pngegg.com/pngimages/620/23/png-clipart-phone-phone.png" alt="img2" />
                        <p className="number"> +38 (097) 403-29-59 </p>
                        {user.isAuth ?
                            <Nav>
                                <Button className="admin" onClick={handleClick}>  АДМИН </Button>
                                <Button className="login" onClick={handleClick1}> ВЫЙТИ </Button>

                            </Nav>
                            :
                            <Nav>
                                <Button className="login" onClick={() => user.setIsAuth(true)}> АВТОРИЗАЦИЯ </Button>
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