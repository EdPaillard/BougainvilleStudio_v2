import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

import Banner from '../Banner/Banner';
import AdminPost from '../AdminPost/AdminPost';
import AdminPutDelete from '../AdminPutDelete/AdminPutDelete';
import AdminTrophees from '../AdminTrophees/AdminTrophees';

import './Admin.css';

export default function Admin() {

    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [admin, setAdmin] = useState(false);

    const [upload, setUpload] = useState(false);
    const [put, setPut] =useState(false);
    const [trophy, setTrophy] = useState(false);

    useEffect(() => {
        
        axios.get(`http://localhost:5000/adminauth/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data === 'ADMIN_OK') {
                setAdmin(true);
            }
        })
    }, [])


  return admin ? (<div className='h-100vh'>
      <Banner />
      <Container className='mt-5r'>
        <ListGroup>
            {!upload ? (<ListGroup.Item className='cursor' onClick={() => {setUpload(true); setPut(false)}} >Upload Frag</ListGroup.Item>) : (<AdminPost setUpload={setUpload} />)}
            {!put ? (<ListGroup.Item className='cursor mt-5r' onClick={() => {setPut(true); setUpload(false)}} >Modifier Frag</ListGroup.Item>) : (<AdminPutDelete setPut={setPut} />)}
            {!trophy ? (<ListGroup.Item className='cursor mt-5r' onClick={() => {setTrophy(true); setUpload(false)}} >Test trophées</ListGroup.Item>) : (<AdminTrophees setTrophy={setTrophy} />)}
        </ListGroup>
      </Container>
  </div>) : (<div className='h-100vh'>
                <Banner />
                    <Container>
                        <Alert className='mt-2r' variant='danger'>
                            Alors étranger ? On s'est perdu ?  
                            <Alert.Link href="/"> Retrouve ton chemin</Alert.Link>
                        </Alert>
                    </Container>
                        </div>);
}
