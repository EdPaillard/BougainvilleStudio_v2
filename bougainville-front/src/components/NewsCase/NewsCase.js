import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import './NewsCase.css';

export default function NewsCase() {
  return <Container className='flex flex__jcc flex__aic flex__gap1 mt-5r'>
            <Card className="bg-dark text-white news">
                <Card.Img src="/news_show1.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='news__title'>Frag 1</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="/news_show2.png" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Frag 2</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
         </Container>
}