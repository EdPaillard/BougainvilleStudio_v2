import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Banner from '../Banner/Banner';

import './Register.css';

export default function Register() {

    const [email, setEmail] = useState();
    const [pseudo, setPseudo] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [warn, setWarn] = useState();
    const [result, setResult] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(email === null || password === null || pseudo === null) return setWarn('Veuillez renseigner un email et un mot de passe !');
        const majCheck = /[A-Z]/;
        const numberCheck = /[0-9]/;
        if(majCheck.exec(password) === null) return setWarn('Mot de passe incorrect !');
        if(numberCheck.exec(password) === null) return setWarn('Mot de passe incorrect !');
        setWarn('');
        const user = {
            pseudo: pseudo,
            email: email,
            password: password
        }
        axios.post('http://162.19.66.30:5000/inscription', user)
        .then(res => {
            console.log(res);
            if(res.statusText === 'Created') {
                setResult(1);
                setTimeout(() => redirect(), 2000);
            } else {
                setResult(2);
            }
        });
    }

    const navigate = useNavigate()
    const redirect = () => {
        console.log('BLOP')
        navigate('/login');
    }

  return (<>
        <Banner />
        <Container className='h-100vh mt-2r'>
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
                    <Form.Text className="text-muted text-white">
                    5 caractères minimum, majuscule et chiffre obligatoires.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Confirmer votre mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Confirmer votre mot de passe" onChange={(event) => setConfirmPassword(event.target.value)} />
                </Form.Group>
                { password === confirmPassword ? (<Button variant="primary" type="submit">
                    S'inscrire
                </Button>) : (<Button variant="primary" type="submit" disabled >
                    S'inscrire
                </Button>) }
                {warn ? (<Alert variant='warning' className='mt-2r'>
                    {warn}
                </Alert>) : null}
                {result === 1 ? (<Alert className='mt-2r' variant='success'>
                            Inscription réussie ! 
                            <Alert.Link href="/login"> Se connecter ?</Alert.Link>
                        </Alert>) : null}
                {result === 2 ? (<Alert className='mt-2r' variant='danger'>
                    Quelque chose s'est mal passé...
                </Alert>) : null}
            </Form>
        </Container>
        </>);
}
