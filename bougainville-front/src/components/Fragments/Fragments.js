import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';

import './Fragments.css';

export default function Fragments({ id, title, miniature, main, main__title, main__link, logoBougTrunc }) {

  const [fragHover, setFragHover] = useState('');

  return <a href={`/fragment/${id}`} className={`mb-5r fragment__link ${main__link}`} onMouseEnter={() => setFragHover('fragHover')} onMouseLeave={() => setFragHover('')}>
      <Card className={`bg-dark text-white fragment ${main}`}>
        <Card.Img className={`fragment__mini ${fragHover}`} src={`/fragsPictures/${miniature}`} alt="Frag image" />
        <Card.ImgOverlay>
          {logoBougTrunc ? (<img className='fragment__logoboug' alt='logo_Boug_trunc' src='/logo_boug_trunc.png' />) : null}
          <Card.Title className={`fragment__title ${main__title}`}>{title.toUpperCase()}</Card.Title>
        </Card.ImgOverlay>
      </Card>
      </a>;
}
