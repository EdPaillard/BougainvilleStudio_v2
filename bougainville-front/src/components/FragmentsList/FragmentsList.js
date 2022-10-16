import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Fragments from '../Fragments/Fragments';
import Banner from '../Banner/Banner';

import './FragmentsList.css'

export default function FragmentsList() {

  const [frags, setFrags] = useState([]);

  useEffect(() => {
    axios.get('http://162.19.66.30:5000/fragments')
    .then(res => {
      console.log(res.data);
      setFrags(res.data);
    })
  }, [])

  return <>{frags ? (<div className='h-100vh overflow-s'>
      <Banner />

     <Container fluid className='fragment__container flex flex__se'>
      {frags.map((frag) => {
        console.log(frags.indexOf(frag))
        return <Fragments key={frag._id} id={frag._id} title={frag.title} miniature={frag.miniature} index={frags.indexOf(frag)}/>
      })}
      <Fragments id={5} title="titre5" miniature="5.png" index={0}/>
      <Fragments id={6} title="titre6" miniature="6.png" index={1}/>
      <Fragments id={7} title="titre7" miniature="5.png" index={2}/>
      <Fragments id={8} title="titre8" miniature="6.png" index={3}/>
      <Fragments id={5} title="titre5" miniature="5.png" index={0}/>
      <Fragments id={6} title="titre6" miniature="6.png" index={1}/>
      <Fragments id={7} title="titre7" miniature="5.png" index={2}/>
      <Fragments id={8} title="titre8" miniature="6.png" index={3}/>
  </Container>
  </div>) : null}</>;
}
