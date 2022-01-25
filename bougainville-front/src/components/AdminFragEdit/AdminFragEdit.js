import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function AdminFragEdit({ id, title, description, miniature, content }) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newMiniature, setNewMiniature] = useState(miniature);
    const [newContent, setNewContent] = useState(content);
    const [edit, setEdit] = useState(false)

    const handleClick = () => {
      const obj = {
          title: newTitle,
          description: newDescription,
          miniature: newMiniature,
          content: newContent
      }

      axios.put(`http://localhost:5000/fragment/modifier/${id}`, obj)
      .then(res => {
        if(res.statusText === 'OK') {
          setEdit(true);
        }
      });

  }

  return <tr>
      <th>{id}</th>
      <th><input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} /></th>
      <th><input value={newDescription} onChange={(event) => setNewDescription(event.target.value)} /></th>
      <th><input type='file' onChange={(event) => setNewMiniature(event.target.files[0].name)} /></th>
      <th><input value={newContent} onChange={(event) => setNewContent(event.target.value)} /></th>
      <th><Button onClick={() => handleClick()}>Mettre à jour</Button></th>
      {edit ? (<th><Alert className='mt-2r' variant='success'>Fragment mis à jour !</Alert></th>) : null}
  </tr>;
}
