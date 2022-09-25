import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import './HeroesScene.css';

export default function HeroesScene({ id, background, PNJPicture, PNJSentence, option1, option2, option3 }) {
  return <Container className='mt-5r heroes__container text-white'>
      <div></div>
      <div className='heroes__PNJSentence innerGrid'><h1 className='bg-color'>{PNJSentence}</h1></div>
      <div></div>
      <div className='heroes__option1 innerGrid'><p className='bg-color'>{option1}</p></div>
      <div className='heroes__background innerGrid'><Image alt='background_picture' src={`/scenePictures/${background}`} />
        <div className='heroes__PNJPicture innerGrid'><Image alt='PNJ_picture' src={`/scenePictures/${PNJPicture}`} /></div>
      </div>
      <div className='heroes__option2 innerGrid'><p className='bg-color'>{option2}</p></div>
      <div></div>
      <div className='heroes__option3 innerGrid'><p className='bg-color'>{option3}</p></div>
      <div></div>
  </Container>;
}
