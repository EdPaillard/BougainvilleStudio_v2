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

     <Container className='fragment__container flex flex__se flex__aic mt-5r'>
      {frags.map((frag) => {
        console.log(frags.indexOf(frag))
        return <Fragments key={frag._id} id={frag._id} title={frag.title} miniature={frag.miniature} index={frags.indexOf(frag)}/>
      })}
  </Container>
  </div>) : null}</>;
}
