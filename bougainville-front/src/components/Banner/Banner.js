import React, { useState, useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Banner.css';
import axios from 'axios';

export default function Banner({ isLogged} ) {

    const [profilPic, setProfilPic] = useState('profil_pic.png');
    const [userId, setUserId] = useState(sessionStorage.getItem('id')); 

    useEffect(() => {
        setUserId(sessionStorage.getItem('id'));
    }, [isLogged])

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userId}`)
        .then(res => {
        console.log(res);
        setProfilPic(res.data.profilimg)
        });
    }, [isLogged])

  return (<Navbar bg="dark" variant='dark' expand='lg'>
            <Container>
                <Navbar.Brand className='mr-20 flex flex__jcc flex__aic flex__gap1' href="/">
                <img
                    src="/logo_boug.png"
                    width="48"
                    height="48"
                    className="d-inline-block align-top"
                    alt="Bougainville logo"
                />{' '}
                Bougainville
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Navbar.Brand href="/">
                    <img
                        src="/home_ico.png"
                        width="48"
                        height="48"
                        className="d-inline-block align-top"
                        alt="Bougainville logo"
                    />
                    </Navbar.Brand>
                    <NavDropdown title={<img alt='Bougainville+ icone' src={'/boug+_ico.png'} />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/resume">Présentation</NavDropdown.Item>
                        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<img alt='Fragments icone' src={'/frag_ico.png'} />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/fragments">Les Fragments</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/arcs">Les Arcs</NavDropdown.Item>
                        <NavDropdown.Item href="/timeline">Les lignes du Temps</NavDropdown.Item>
                        <NavDropdown.Item href="/heroes">Hautbrave #546</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand href="/shop">
                    <img
                        src="/shop_ico.png"
                        width="48"
                        height="48"
                        className="d-inline-block align-top"
                        alt="Shop logo"
                    />
                    </Navbar.Brand>
                </Nav>
                </Navbar.Collapse>
                <Nav>
                {userId === null ? (<NavDropdown title={<img className='userPP' alt='User PP' src={`/userPictures/${profilPic}`} />} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/register">Créer un compte</NavDropdown.Item>
                        <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
                    </NavDropdown>) : 
                    (<NavDropdown title={<img className='userPP' alt='User PP' src={`/userPictures/${profilPic}`} />} id="basic-nav-dropdown">
                        <NavDropdown.Item href={`/profil/${userId}`}>Profil</NavDropdown.Item>
                        <NavDropdown.Item href="/" className='bg-cr' onClick={() => sessionStorage.clear()}>Déconnexion</NavDropdown.Item>
                    </NavDropdown>)}
                </Nav>
            </Container>
          </Navbar> 
        );
}
