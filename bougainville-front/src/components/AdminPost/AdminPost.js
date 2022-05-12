import React, { useState } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Alert from 'react-bootstrap/Alert';

export default function AdminPost({ setUpload }) {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [miniature, setMini] = useState();
    const [content, setContent] = useState();
    const [result, setResult] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            title: title,
            description: description,
            mini: miniature,
            content: content
        }

        axios.post('http://162.19.66.30:5000/fragments', obj)
        .then(res => {
            if(res.statusText === 'Created') { 
                setResult(true);
            }
        });
    }

  return <div>
      <Container className='mt-2r bc-w'>
      <Button className='mb-3' variant="light" onClick={() => setUpload(false)}>&#60; Retour</Button>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'>Titre</Form.Label>
                    <Form.Control name='title' type="text" onChange={(event) => setTitle(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPseudo">
                    <Form.Label className='text-white'>Description</Form.Label>
                    <Form.Control name='description' type="text" onChange={(event) => setDescription(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Miniature</Form.Label>
                    <Form.Control name='miniature' type="file" onChange={(event) => setMini(event.target.files[0].name)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'>Content</Form.Label>
                    <Form.Control name='content' type="text" onChange={(event) => setContent(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
            {result ? (<Alert className='mt-2r' variant='success'>
                            Fragment upload !
                            <Alert.Link href="/admin"> Admin</Alert.Link>
                        </Alert>) : null}
        </Container>
  </div>;
}
