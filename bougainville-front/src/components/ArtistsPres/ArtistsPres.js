import React, { useState } from 'react';

import { Col, Image } from 'react-bootstrap/';

import LinksRS from '../LinksRS/LinksRS';

import './ArtistsPres.css';

export default function ArtistsPres({name, imgBG, underlineImg, description, linkRSL, linkRSR}) {

    const [hoverCSS, setHoverCSS] = useState('');

    function underlineArts() {
        if(hoverCSS === '' || hoverCSS === 'hoverArtsOff') {
            setHoverCSS('underlineArts');
        } else {
            setHoverCSS('hoverArtsOff');
        }
    }

  return (
    <Col className='h-100p homearts__colarts' onMouseEnter={() => underlineArts()} onMouseLeave={() => underlineArts()}>
        <Image className='h-100p homearts__presimg' src={imgBG} />
        <div className='homearts__preslayout'>
            <h1 className='homearts__artsname'><em>{name}</em></h1>
            <p><em>{description}</em></p>
        </div>
        <div className='homearts__divunderline'>
            <Image className={`homearts__underlinearts ${hoverCSS}`} src={underlineImg} />
            <LinksRS linkSM={linkRSL} linkCss={'linkL'} divCss={'linkdivL'} />
            <LinksRS linkSM={linkRSR} linkCss={'linkR'} divCss={'linkdivR'} />
        </div>
    </Col>
  )
}
