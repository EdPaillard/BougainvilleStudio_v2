import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/esm/Container';

import './Fragment.css';

export default function Fragment() {

    const idUrl = useParams()  
    const [id, setId] = useState(idUrl.id);
    const [fragment, setFragment] = useState();

    useEffect(() => {
        console.log(id);
        axios.get(`http://162.19.66.30:5000/fragments/read/${id}`)
        .then(res => {
            console.log(res)
            setFragment({ title: res.data.title, miniature: res.data.miniature, description: res.data.description, content: res.data.content });
        });
    }, [])



  return <div className='h-100vh overflow-s'>
      <Banner />
      <Container className='flex flex__jcc flex__aic mt-2r frag__container'>
      {fragment ? (<div className='text-white frag'>
        <h1 className='frag__title'>{fragment.title}</h1>
        <p><img className='frag__image' alt='frag_miniature' src={`/fragsPictures/${fragment.miniature}`}/></p>
        <p className='frag__description'>{fragment.description}</p>
        </div>) : 
        (null)}
      </Container>
      <Footer />
  </div>;
}
