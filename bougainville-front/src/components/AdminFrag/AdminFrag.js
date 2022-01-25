import React, { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import AdminFragEdit from '../AdminFragEdit/AdminFragEdit';


export default function AdminFrag({ id, title, description, miniature, content }) {

    const [del, setDelete] = useState(false);
    const [suppr, setSuppr] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleSupprClick = () => {
        axios.delete(`http://localhost:5000/fragment/delete/${id}`)
        .then(res => {
            if(res.statusText === 'OK') {
                setDelete(true);
            }
        });
    }

  return !suppr ? ( !edit ? (<tr key={id}><th>{id}</th>
  <th>{title}</th>
  <th>{description}</th>
  <th>{miniature}</th>
  <th>{content}</th>
  <th><Button onClick={() => setEdit(true)}>Editer</Button></th>
  <th><Button onClick={() => setSuppr(true)}>Supprimer</Button></th></tr>) : (
      <AdminFragEdit id={id} title={title} description={description} miniature={miniature} content={content} />
  )
) : ( !del ? (<tr><th><Alert className='mt-2r' variant='warning'>Etes-vous sûr de vouloir supprimer ce fragment ?
  <Button onClick={() => handleSupprClick()} >Confirmer</Button>
  <Button onClick={() => setSuppr(false)} >Annuler</Button>
</Alert></th></tr>) : (<tr><th><Alert className='mt-2r' variant='success'>Fragment supprimé !</Alert></th></tr>))}

