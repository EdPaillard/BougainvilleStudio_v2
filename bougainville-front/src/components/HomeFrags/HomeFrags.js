import React from 'react'
import { useState } from 'react';


import { Col, Container, Image } from 'react-bootstrap/';

import "./HomeFrags.css"

export default function HomeFrags({miniature, underlineImg, fragIndex, id, title }) {

    const [hoverCSS, setHoverCSS] = useState('');

    function underlineFrag() {
        if(hoverCSS === '' || hoverCSS === 'homefrag__hoverOff') {
            setHoverCSS('homefrag__underlineHover');
        } else {
            setHoverCSS('homefrag__hoverOff');
        }
    }

  return (
    <Col className='h-100p' onMouseEnter={() => underlineFrag()} onMouseLeave={() => underlineFrag()}>
        <a href={`/fragment/${id}`}>
            <Container className='homefrag__fragcont h-100p' fluid>
                <Image className='homefrag__frag' fluid src={`${miniature}`}/>
                <p className='homefrag__fragcount'>#{fragIndex}</p>
                <div className={`homefrag__divunder ${hoverCSS}`}>
                    <Image className={`homefrag__underline`} src={underlineImg} />
                    <p className='homefrag__title'>{title.toUpperCase()}</p>
                </div>
            </Container>
        </a>
    </Col>
  )
}
