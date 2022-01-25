import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function Fragments({ title, description, miniature, content }) {
  return <Container className='fragment__container flex flex__jcc flex__aic gap1'>
      <Card className="bg-dark text-white fragment">
        <Card.Img className='fragment__mini' src={`/fragsPictures/${miniature}`} alt="Frag image" />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>{content}</Card.Text>
        </Card.ImgOverlay>
      </Card>
  </Container>;
}
