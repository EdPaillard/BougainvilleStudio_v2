import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HeroesScene from '../HeroesScene/HeroesScene';

export default function Heroes() {

  const [scene, setScene] = useState()

  useEffect(() => {
    axios.get(`http://162.19.66.30:5000/heroes/scene/${1}`)
    .then(res => {
      console.log(res);
      setScene(res.data[0]);
    });
  }, [])

  return <div className='h-100vh overflow-s'>
      <Banner />

      {scene ? (<HeroesScene 
        id={scene._id} 
        background={scene.background} 
        PNJPicture={scene.PNJPicture} 
        PNJSentence={scene.PNJSentence} 
        option1={scene.option1} 
        option2={scene.option2} 
        option3={scene.option3}
      />) : null}
      <Footer />
  </div>;
}
