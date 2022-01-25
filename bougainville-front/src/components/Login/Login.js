import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Banner from '../Banner/Banner';

import './Login.css';

export default function Login() {

    

    const [email, setEmail] = useState();
    const [pseudo, setPseudo] = useState();
    const [password, setPassword] = useState();
    const [isLogged, setIsLogged] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            pseudo: pseudo,
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/login', user)
        .then(res => {
            if(res.statusText === 'OK'){
                sessionStorage.setItem('id', res.data);
                setIsLogged(1);
            } else {
                setIsLogged(2);
            }
            console.log(res)});

    }

  return (<>
        <Banner />
        <Container className='h-100vh mt-2r bc-w'>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPseudo">
                    <Form.Label className='text-white'>Pseudo</Form.Label>
                    <Form.Control name='pseudo' type="text" placeholder="Enter pseudo" onChange={(event) => setPseudo(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Mot de passe</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Mot de passe" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                {(email === null || password === null) ? (<Button variant="primary" type="submit" disabled>
                    Se connecter
                </Button>) : (<Button variant="primary" type="submit">
                    Se connecter
                </Button>) }
            </Form>
            {isLogged === 1 ? (<Alert className='mt-2r' variant='success'>
                            Bienvenue {pseudo} ! 
                            <Alert.Link href="/"> Accueil</Alert.Link>
                        </Alert>) : null}
            {isLogged === 2 ? (<Alert className='mt-2r' variant='danger'>
                Identifiants incorrects...
            </Alert>) : null}
        </Container>
        </>);
}
