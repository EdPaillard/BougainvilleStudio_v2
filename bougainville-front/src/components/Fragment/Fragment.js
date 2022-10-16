import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/esm/Container';
// import Footer from '../Footer/Footer';
// import Banner from '../Banner/Banner';

import './Fragment.css';

export default function Fragment() {

    const idUrl = useParams()
    const id = idUrl.id;
    // const [id, setId] = useState(idUrl.id);
    const [fragment, setFragment] = useState();

    useEffect(() => {
        console.log(id);
        axios.get(`http://162.19.66.30:5000/fragments/read/${id}`)
        .then(res => {
            console.log(res)
            setFragment({ title: res.data.title, miniature: res.data.miniature, description: res.data.description, content: res.data.content, type: res.data.type });
        });
    })

  function setContent() {
    if(fragment.type === 'audio') {
      return <audio controls src={`/${fragment.content}`}></audio>    }
    else if(fragment.type === 'text') {
      return <p>{`/${fragment.content}`}</p>
    }
    else if(fragment.type === 'video') {
      return <video className='frag__content' controls src={`/${fragment.content}`}></video>
    }
    else {
      return <p>Fragment défragmenté...</p>
    }
  }



  return <div className='h-100vh overflow-s'>
      {/* <Banner /> */}
      <Container className='flex flex__jcc flex__aic mt-2r frag__container'>
      {fragment ? (<div className='text-white frag'>
        <h1 className='frag__title'>{fragment.title}</h1>
        <p><img className='frag__image' alt='frag_miniature' src={`/${fragment.miniature}`}/></p>
        <p className='frag__description'>{fragment.description}</p>
        <video src={fragment.content} ></video>
        {setContent()}
        </div>) : 
        (null)}
      </Container>
      {/* <Footer /> */}
  </div>;
}
