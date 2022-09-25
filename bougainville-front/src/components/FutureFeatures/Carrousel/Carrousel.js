import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import './Carrousel.css';

export default function Carroussel() {

    const [mainHover, setOnHover] = useState('');

  return <Container className='mt-2r cursor'>
            <Carousel fade>
                <Carousel.Item onMouseEnter={() => setOnHover('carrousel__mainhover')} onMouseLeave={() => setOnHover('')}>
                    <img
                    className={`d-block w-100 h-630 carrousel__image ${mainHover}`}
                    src="/news_bg_accueil.png"
                    alt="First slide"
                    />
                    <img 
                    className={`carrousel__titre w-100 h-100 ${mainHover}`}
                    src="/titre_main.png"
                    alt="titre Bougainville"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onMouseEnter={() => setOnHover('carrousel__mainhover')} onMouseLeave={() => setOnHover('')}>
                    <img
                    className={`d-block w-100 h-630 carrousel__image ${mainHover}`}
                    src="banniere_frags.jpg"
                    alt="Second slide"
                    />
                    <img 
                    className={`carrousel__titre w-100 h-100 ${mainHover}`}
                    src="/titre_main.png"
                    alt="titre Bougainville"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item onMouseEnter={() => setOnHover('carrousel__mainhover')} onMouseLeave={() => setOnHover('')}>
                    <img
                    className={`d-block w-100 h-630 carrousel__image ${mainHover}`}
                    src="banniere_frags3.jpg"
                    alt="Third slide"
                    />
                    <img 
                    className={`carrousel__titre w-100 h-100 ${mainHover}`}
                    src="/titre_main.png"
                    alt="titre Bougainville"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>;
}
