import React from 'react'

//router for nav
import { Link } from 'react-router-dom';

// import imge
import logo from '../imges/logo.png'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


// import Button
import Button from 'react-bootstrap/Button';

const Navv = () => {
    return (
        <div>
            <Navbar expand="lg" >
                <Container >
                    <Link to='/'>
                        <img src={logo} alt='logo' className='logo' style={{ width: '100px' }} />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav  " />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="Nav align-items-center d-flex justify-content-center ms-5 fw-bold">
                            <Link to='/'>
                                <Button>Home</Button>
                            </Link>
                            <Link to='/Pages/AboutPage'>
                                <Button>About</Button>
                            </Link>
                            <Link to='/Pages/ContactPage'>
                                <Button >Contact</Button>
                            </Link>
                            <Link to='/Pages/PropertiePage'>
                                <Button >Property</Button>
                            </Link>
                            <Link to='/Pages/BlogPage'>
                                <Button >Blog</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
                        <Nav className="Nav align-items-center ">
                            <Link to='/Pages/LoginPage'>
                                <Nav.Link href='/Pages/LoginPage'><i class="fa-regular fa-user"></i></Nav.Link>
                            </Link>
                            <Link to='/Pages/LoginPage'>
                                <Nav.Link href="/Pages/CartPage"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navv


