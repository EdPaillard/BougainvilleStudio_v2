import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default function ProfilEdit({ id, pseudo, about, profilimg, age, email, ville, setEdit }) {

    const [newPseudo, setNewPseudo] = useState(pseudo);
    const [newAbout, setNewAbout] = useState(about);
    const [newAge, setNewAge] = useState(age);
    const [newEmail, setNewEmail] = useState(email);
    const [newVille, setNewVille] = useState(ville);
    const [success, setSuccess] = useState(false);
    const [erreur, setErreur] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        const obj = {
            pseudo: newPseudo,
            about: newAbout,
            age: newAge,
            email: newEmail,
            ville: newVille
        };

        axios.put(`http://localhost:5000/user/edit/${id}`, obj)
        .then(res => {
            if(res.statusText === 'OK') {
                setSuccess(true);
            } else {
                setErreur(true);
            }
        });
    }

  return <Container className='mt-2r'>
      <Button className='mb-3' variant="light" onClick={() => setEdit(false)}>&#60; Retour</Button>
            <Form className='text-white'>
                <Form.Group className="mb-3">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type='text' value={newPseudo} onChange={(event) => setNewPseudo(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' value={newAbout} onChange={(event) => setNewAbout(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type='number' min='5' max='120' value={newAge} onChange={(event) => setNewAge(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' value={newEmail} onChange={(event) => setNewEmail(event.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Ville</Form.Label>
                <Form.Control value={newVille} onChange={(event) => setNewVille(event.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(event) => handleClick(event)}>Editer le profil</Button>
            </Form>
            {success ? (<Alert className='mt-2r' variant='success'>
                            Edition réussie ! 
                        </Alert>) : null}
            {erreur ? (<Alert className='mt-2r' variant='danger'>
                Quelque chose s'est mal passé...
            </Alert>) : null}
          </Container>;
}
