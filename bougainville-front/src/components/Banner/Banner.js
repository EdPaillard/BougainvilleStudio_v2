// import React, { useState, useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import './Banner.css';
// import axios from 'axios';

export default function Banner({ isLogged} ) {

    // const [profilPic, setProfilPic] = useState('profil_pic.png');
    // const [userId, setUserId] = useState(sessionStorage.getItem('id')); 

    // useEffect(() => {
    //     setUserId(sessionStorage.getItem('id'));
    // }, [isLogged])

    // useEffect(() => {
    //     if(!userId) return;
    //     axios.get(`http://162.19.66.30:5000/user/${userId}`)
    //     .then(res => {
    //     console.log(res);
    //     setProfilPic(res.data.profilimg)
    //     });
    // }, [isLogged])

  return (<Navbar variant='dark' expand='lg' className='navBar'>
            <Container>
                <Navbar.Brand className='mr-20 flex flex__jcc flex__aic flex__gap1' href="/">
                <img
                    src="/boug_logo_f.png"
                    width="68"
                    height="68"
                    className="d-inline-block align-top"
                    alt="Bougainville logo"
                />{' '}
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="me-auto">
                    <Nav.Link href='/'><h3 className='colorText'>Accueil</h3></Nav.Link>
                    <Nav.Link href='/fragments'><h3 className='colorText'>Fragments</h3></Nav.Link>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
          </Navbar> 
        );
}
