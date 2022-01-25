import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function AdminTrophees({ setTrophy }) {

  const [id, setId] = useState(sessionStorage.getItem('id'));
  const [trophees, setTrophees] = useState();

  const handleGetOne = () => {
    axios.get(`http://localhost:5000/trophees/${id}/${trophees[0]._id}`)
    .then(res => console.log(res));

  }

  const handleGetAll = () => {
    axios.get(`http://localhost:5000/trophees/${id}`)
    .then(res => {
      console.log(res)
      setTrophees(res.data);
    });
  }

  const handleCreate = () => {
    const obj = {
      userId: id,
      entitle: 'Trophée 4',
      resume: 'Vous vous êtes hissé à la tête de la colonie de Darchfor',
      picture: 'trophy_icon.png',
      date: new Date()
    }

    axios.post('http://localhost:5000/trophees/success', obj)
    .then(res => console.log(res));
  }

  const test = () => {
    console.log(trophees);
  }


  return <Container className='mt-2r'>
          <Button className='mb-3' variant="light" onClick={() => setTrophy(false)}>&#60; Retour</Button>
      <Button onClick={() => handleGetOne()} >GetOne</Button>
      <Button onClick={() => handleGetAll(id)} >GetAll</Button>
      <Button onClick={() => handleCreate()} >Create</Button>
      <Button onClick={() => test()} >Test trophId</Button>
  </Container>;
}
