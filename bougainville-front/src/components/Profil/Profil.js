import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';


import Banner from '../Banner/Banner';

export default function Profil() {

  const [id, setId] = useState(sessionStorage.getItem('id'));
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`)
    .then(res => {
      console.log(res);
      setUser({pseudo: res.data.pseudo, profilimg: res.data.profilimg, age: res.data.age, email: res.data.email, ville: res.data.ville, about: res.data.about})
    });
  }, [])


  return <>
    {user ? (
    <div className='h-100vh'>
      <Banner />
      {!edit ? (<div>
        <Button onClick={() => setEdit(true)}>Editer le profil</Button>
        <Image alt='Profil Picture' src={user.profilimg} />
        <h1>{user.pseudo}</h1>
        <p>{user.about}</p>
      </div>) :
      (<Container>
        <Form>
          <Form.Group>
            <Form.Label>Pseudo</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image de profil</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ville</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </Form>
      </Container>)}
  </div>) : null }
  </>;
}
