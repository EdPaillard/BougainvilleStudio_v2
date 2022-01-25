import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import AdminFrag from '../AdminFrag/AdminFrag';

export default function AdminPutDelete() {

    const [frags, setFrags] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/fragments')
        .then(res => {
            console.log(res.data);
            setFrags(res.data);
        })
    }, []);
    
  return <Container className='mt-5r'>
      {frags ? (<Table responsive striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Miniature</th>
            <th>Content</th>
            </tr>
        </thead>
        <tbody>

            {frags.map((frag) => {
                        return <AdminFrag key={frag._id} id={frag._id} title={frag.title} description={frag.description} miniature={frag.miniature} content={frag.content} />})}
        </tbody>
      </Table>) : null}
  </Container>;
}
