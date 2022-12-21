import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ResumeInfo from '../ResumeInfo/ResumeInfo';

import './Resume.css';

export default function Contact() {

  const [auteur, setAuteur] = useState(true);
  const [art, setArt] = useState(false);
  const [son, setSon] = useState(false);
  const [edClass, setEdClass] = useState('contact__listitem cursor');
  const [antClass, setAntClass] = useState('contact__listitem cursor');
  const [juClass, setJuClass] = useState('contact__listitem cursor');

  const handleClick = (nbr) => {
    switch(nbr) {
      case 1:
        setAuteur(true);
        setArt(false);
        setSon(false);
        break;
      case 2:
        setAuteur(false);
        setArt(true);
        setSon(false);
        break;
      case 3:
        setAuteur(false);
        setArt(false);
        setSon(true);
        break;
      default:
        return;
    }
  }

  const handleEnter = (nbr) => {
    switch(nbr) {
      case 1:
        setEdClass('onHover');
        break;
      case 2:
        setAntClass('onHover');
        break;
      case 3:
        setJuClass('onHover');
        break;
      default:
        return;
    }

  }

  const handleLeave = (nbr) => {
    switch(nbr) {
      case 1:
        setEdClass('');
        break;
      case 2:
        setAntClass('');
        break;
      case 3:
        setJuClass('');
        break;
      default:
        return;
    }
  }

  return <div className='h-100vh overflow-s'>
      <Banner />
        <Card className='bg-dark text-white contact flex mt-5r' id='bgdcolor'>
          <Card.Img src='/resume_layer.png' alt='background-resume' />
          <Card.ImgOverlay className='resume__overlay flex'>
            <Container className='resume__container flex flex__jcc flex__aic'>
              <section className='flex flex__fdc contact__selectsection'>
                <ListGroup variant="flush" className='resume__list'>
                  <ListGroup.Item className='contact__listitem cursor' onClick={() => handleClick(1)} onMouseEnter={() => handleEnter(1)} onMouseLeave={() => handleLeave(1)}><span className={edClass}>AUTEUR</span></ListGroup.Item>
                  <ListGroup.Item className='contact__listitem cursor' onClick={() => handleClick(2)} onMouseEnter={() => handleEnter(2)} onMouseLeave={() => handleLeave(2)}><span className={antClass}>ART</span></ListGroup.Item>
                  <ListGroup.Item className='contact__listitem cursor' onClick={() => handleClick(3)} onMouseEnter={() => handleEnter(3)} onMouseLeave={() => handleLeave(3)}><span className={juClass}>SON</span></ListGroup.Item>
                </ListGroup>
              </section>
              <article className='contact__select flex'>
                <section className='contact__imgsection flex flex__aic'>
                  <img alt='Bougainville Icon' src='/logo_boug.png' className='contact__img' />
                </section>
              <Container className='flex flex__fdc flex__aic contact__table'>
              <div borderless className='contact__info'>
                {auteur ? (<ResumeInfo role={'SCENARISTE'} resume={'Edouard Paillard est un auteur de talent. Il a collaboré avec Valeurs Actuelles ainsi qu\'avec l\'envahisseur allemand dès 1939.'} />) : null}
                {art ? (<ResumeInfo role={'DIRECTEUR ARTISTIQUE'} resume={'Antoine Petiteau est un dessinateur de talent. Après avoir réussi à échouer son école contre toute attente, Antoine s\'est lancé en tant que freelance dans le homedraw, activité qui consiste à dessiner des zguegs dans la marge des feuilles qui trainent à la maison.'} />) : null}
                {son ? (<ResumeInfo role={'INGE SON'} resume={'Jules Lucciardi, dont on est même pas tout à fait sûr de l\'orthographe du nom, est un jeune. Un jeune, et pourtant, bien que marseillais, aussi blanc qu\'on peut l\'être, c\'est donc une race de jeune tout à fait particulière. Le genre qu\'on pensait perdu à jamais. A ce titre, Jules est tout à la fois une relique, et une merveille. Aimez Jules. N\'allez plus chez Celio.'} />) : null}
              </div>
              </Container>
              </article>
            </Container>
          </Card.ImgOverlay>
        </Card>
      <Footer />
  </div>;
}
