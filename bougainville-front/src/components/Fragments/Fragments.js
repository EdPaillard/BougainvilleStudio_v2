import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import './Fragments.css';

export default function Fragments({ id, title, miniature, main, main__title, main__link, logoBougTrunc, timeline, borderColor, handleClick }) {

  const [fragHover, setFragHover] = useState('');

  const handleFragClick = (id) => {

    handleClick(id);
  }

  return !timeline ? (<a href={`/fragment/${id}`} className={`mb-5r fragment__link ${main__link}`} onMouseEnter={() => setFragHover('fragHover')} onMouseLeave={() => setFragHover('')}>
      <Card className={`bg-dark text-white fragment ${main}`}>
        <Card.Img className={`fragment__mini ${fragHover}`} src={`/fragsPictures/${miniature}`} alt="Frag image" />
        <Card.ImgOverlay className='fragment__overlay'>
          {logoBougTrunc ? (<img className='fragment__logoboug' alt='logo_Boug_trunc' src='/logo_boug_trunc.png' />) : null}
          <Card.Title className={`fragment__title ${main__title}`}><p className='fragment__para'>{title.toUpperCase()}</p></Card.Title>
        </Card.ImgOverlay>
      </Card>
      </a>)
      :
      (<Card className={`bg-dark text-white timeFrag mt-2r ${borderColor}`} onClick={() => handleFragClick(id)}>
        <Card.Header className='timeFrag__header'>{title}</Card.Header>
      <Card.Img className={`timeFrag__image`} src={`/fragsPictures/${miniature}`} alt="Frag image" />
      <Card.ImgOverlay>
      </Card.ImgOverlay>
    </Card>);
}
