import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/esm/Container';
// import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

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
            setFragment({ title: res.data.title,
              miniature: res.data.miniature, 
              description: res.data.description, 
              content: res.data.content, 
              content2: res.data.content2, 
              content3: res.data.content3, 
              content4: res.data.content4, 
              type: res.data.type,
              type2: res.data.type2,
              type3: res.data.type3,
              type4: res.data.type4
             });
        });
    })

  function selectType({type, frag, css}) {
    if(type === "audio") {
      return <audio controls src={`/${frag}`} className={`fragment__content ${css}`}></audio>
    }
    if(type === "video") {
      return <video controls src={`/${frag}`} className={`fragment__content ${css}`}></video>
    }
    if(type === "text") {
      const formatText = frag.split('\\<br>');
      const finalText = [];
      formatText.forEach(element => {
          finalText.push(<p>{element}</p>);
      });
      return <div>{finalText}</div>
    }
    if(type === "image") {
      return <img src={`/${frag}`} className={`fragment__content ${css}`}/>
    }
  } 

  function displayContent() {
    const classct = "mb-2r";
    if(fragment.content4) {
      const fragcontent4 = selectType({type: fragment.type4, frag: fragment.content4 })
      const fragcontent3 = selectType({type: fragment.type3, frag: fragment.content3, classct })
      const fragcontent2 = selectType({type: fragment.type2, frag: fragment.content2, classct })
      const fragcontent = selectType({type: fragment.type, frag: fragment.content, classct })

      return <div>
        {fragcontent}
        {fragcontent2}
        {fragcontent3}
        {fragcontent4}
      </div>
    } else if(fragment.content3) {
      const fragcontent3 = selectType({type: fragment.type3, frag: fragment.content3 })
      const fragcontent2 = selectType({type: fragment.type2, frag: fragment.content2, classct })
      const fragcontent = selectType({type: fragment.type, frag: fragment.content, classct })

      return <div>
        {fragcontent}
        {fragcontent2}
        {fragcontent3}
      </div>
    } else if(fragment.content2) {
      // UNDEFINED PARCE QUE TYPE.2, TYPE.3 etc ne sont pas encore créés dans DB
      console.log(fragment.content);
      const fragcontent2 = selectType({type: fragment.type2, frag: fragment.content2 })
      const fragcontent = selectType({type: fragment.type, frag: fragment.content, classct })
      console.log(fragcontent2);
      
      return <div>
        <p>{fragcontent}</p>
        <p>{fragcontent2}</p>
      </div>
    } else {
      const fragcontent = selectType({type: fragment.type, frag: fragment.content })

      return <div>
        {fragcontent}
      </div>
    }
  }

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
      <Banner />
      <Container className='flex flex__jcc flex__aic mt-2r frag__container'>
      {fragment ? (<div className='text-white frag'>
        {/* <h1 className='frag__title'>{fragment.title}</h1>
        <p><img className='frag__image' alt='frag_miniature' src={`/${fragment.miniature}`}/></p>
        <p className='frag__description'>{fragment.description}</p>
        <video src={fragment.content} ></video> */}
        {displayContent()}
        </div>) : 
        (null)}
      </Container>
      {/* <Footer /> */}
  </div>;
}
