import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ContactInfo from '../ContactInfo/ContactInfo';

import './Contact.css';

export default function Contact() {

  const [edouard, setEdouard] = useState(true);
  const [antoine, setAntoine] = useState(false);
  const [jules, setJules] = useState(false);
  const [edClass, setEdClass] = useState('contact__listitem cursor');
  const [antClass, setAntClass] = useState('contact__listitem cursor');
  const [juClass, setJuClass] = useState('contact__listitem cursor');
  const [mail, setMail] = useState('ed.paillard@gmail.com');

  const handleClick = (nbr) => {
    switch(nbr) {
      case 1:
        setEdouard(true);
        setAntoine(false);
        setJules(false);
        setMail('ed.paillard@gmail.com')
        break;
      case 2:
        setEdouard(false);
        setAntoine(true);
        setJules(false);
        setMail('antoine.petiteau@gmail.com')
        break;
      case 3:
        setEdouard(false);
        setAntoine(false);
        setJules(true);
        setMail('jules.lucciardi@gmail.com')
        break;
      default:
        return;
    }
  }

  const handleEnter = (nbr) => {
    switch(nbr) {
      case 1:
        setEdClass('contact__listitem cursor onHover');
        break;
      case 2:
        setAntClass('contact__listitem cursor onHover');
        break;
      case 3:
        setJuClass('contact__listitem cursor onHover');
        break;
      default:
        return;
    }

  }

  const handleLeave = (nbr) => {
    switch(nbr) {
      case 1:
        setEdClass('contact__listitem cursor');
        break;
      case 2:
        setAntClass('contact__listitem cursor');
        break;
      case 3:
        setJuClass('contact__listitem cursor');
        break;
      default:
        return;
    }
  }

  return <div className='h-100vh overflow-s'>
      <Banner />
        <Card className='bg-dark text-white contact flex mt-5r' id='bgdcolor'>
          <Card.Img src='/contact_layer.png' alt='background-contact' />
          <Card.ImgOverlay className='contact__overlay'>
            <Container className='contact__container flex flex__jcc flex__aic'>
              <Container className='flex flex__fdc flex__aic contact__table'>
              <Table borderless className='contact__info'>
                {edouard ? (<ContactInfo nom={'Edouard Paillard'} age={32} sexe={'Masculin'} origine={'Terrien'} grade={'Rapporteur'} />) : null}
                {antoine ? (<ContactInfo nom={'Antoine Petiteau'} age={24} sexe={'Masculin'} origine={'Terrien'} grade={'Cartographe'} />) : null}
                {jules ? (<ContactInfo nom={'Jules Lucciardi'} age={12} sexe={'Undefined'} origine={'Marseillais'} grade={'Murmureur'} />) : null}
              </Table>
              <a href={`mailto:${mail}`}><Button variant="light">Nouveau Message</Button></a>
              </Container>
              <article className='contact__select flex'>
                <section className='contact__imgsection flex flex__aic'>
                  <img alt='Bougainville Icon' src='/logo_boug.png' className='contact__img' />
                </section>
                <section className='flex flex__fdc contact__selectsection'>
                  <ListGroup variant="flush">
                    <ListGroup.Item className={edClass} onClick={() => handleClick(1)} onMouseEnter={() => handleEnter(1)} onMouseLeave={() => handleLeave(1)}>Edouard Paillard</ListGroup.Item>
                    <ListGroup.Item className={antClass} onClick={() => handleClick(2)} onMouseEnter={() => handleEnter(2)} onMouseLeave={() => handleLeave(2)}>Antoine Petiteau</ListGroup.Item>
                    <ListGroup.Item className={juClass} onClick={() => handleClick(3)} onMouseEnter={() => handleEnter(3)} onMouseLeave={() => handleLeave(3)}>Jules Lucciardi</ListGroup.Item>
                  </ListGroup>
                </section>
              </article>
            </Container>
          </Card.ImgOverlay>
        </Card>
      <Footer />
  </div>;
}
