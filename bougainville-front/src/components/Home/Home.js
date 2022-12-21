import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Col, Row, Container, Image } from 'react-bootstrap/';

import Banner from '../Banner/Banner';

// import Fragments from '../Fragments/Fragments';
// import Footer from '../Footer/Footer';
import Presentation from '../Presentation/Presentation';
import HomeFrags from '../HomeFrags/HomeFrags';
import ArtistsPres from '../ArtistsPres/ArtistsPres';
// import ArtistsList from '../ArtistsList/ArtistsList';
// import Carrousel from '../Carrousel/Carrousel';
// import ShopCase from '../ShopCase/ShopCase';

import './Home.css';

export default function Home() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [frags, setFrags] = useState();

    const artsDescription = [
        'Blablabla Bla bla Bla',
        'Bla bla bla Bla bla bla',
        'Blabla Blabla Blabla'
    ]

    useEffect(() => {
        axios.get('http://162.19.66.30:5000/fragments')
        .then(res => {
            console.log(res);
            setFrags(res.data);
        })
    }, [])

    return ( <>
                <Banner isLogged={isLogged} setIsLogged={setIsLogged} showLogin={showLogin} showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} /> 
                <Container fluid className='h-100vhc'>
                    <Row md={1} lg={2} className='h-100p'>
                        <Col lg={5} className='h-100p'>
                            <Row className='h-50p'>
                                <Col className='h-100p'>
                                    <Presentation />
                                </Col>
                            </Row>
                            <Row className='h-50p pt-xpx'>
                                {frags ? (<HomeFrags title={frags[0].title} id={frags[0]._id} miniature={frags[0].miniature} underlineImg='assets/17.png' fragIndex={1}/>) : null}
                                {frags ? (<HomeFrags title={frags[1].title} id={frags[1]._id} miniature={frags[1].miniature} underlineImg='assets/18.png' fragIndex={2}/>) : null}
                                {/* <Col className='h-100p' onMouseEnter={() => underlineFrag1()} onMouseLeave={() => underlineFrag1()}>
                                    <Container className='home__fragcont h-100p' fluid>
                                        <Image className='home__frag' fluid src='assets/5.png'/>
                                        <p className='home__fragcount'>#1</p>
                                        <Image className={`home__underline ${hoverCSSFg1}`} src={frag1} />
                                    </Container>
                                </Col>
                                <Col className='h-100p' onMouseEnter={() => underlineFrag2()} onMouseLeave={() => underlineFrag2()}>
                                    <Container className='home__fragcont h-100p' fluid>
                                        <Image className='home__frag' fluid src='assets/6.png'/>
                                        <p className='home__fragcount'>#2</p>
                                        <Image className={`home__underline ${hoverCSSFg2}`} src={frag2}/>
                                    </Container>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col lg={6.5} className='flex__flex h-100p home__right'>
                            <Row className='h-100p' xs={1} sm={1} md={3} lg={3}>
                                <ArtistsPres name='EDOUARD PAILLARD' imgBG='assets/1.png' underlineImg='assets/14.png' description={artsDescription[0]} linkRSL='https://github.com/EdPaillard' linkRSR='https://www.linkedin.com/in/edouard-paillard-533325105'/>
                                <ArtistsPres name='ANTOINE PETITEAU' imgBG='assets/2.png' underlineImg='assets/15.png' description={artsDescription[1]} linkRSL='https://www.artstation.com/petiteau' linkRSR='https://www.instagram.com/petiteau.antoine/?hl=fr'/>
                                <ArtistsPres name='JULES LUCCIARDI' imgBG='assets/3.png' underlineImg='assets/16.png' description={artsDescription[2]} linkRSL='https://www.instagram.com/jal_sound_and_voice/' linkRSR='https://www.youtube.com/channel/UCTXcTtgFRLpsYIY_cyYWkZg'/>
                                {/* <Col className='h-100p home__colarts'>
                                    <Image className='h-100p home__presimg' src='assets/2.png'/>
                                    <div className='home__preslayout'>
                                        <h1 className='home__artsname'><em>ANTOINE PETITEAU</em></h1>
                                        <p><em>Blablabla bla bla bla</em></p>
                                    </div>
                                    <Image className='home__underlinearts' src={presAnt} />
                                </Col>
                                <Col className='h-100p home__colarts'>
                                    <Image className='h-100p home__presimg' src='assets/3.png' />
                                    <div className='home__preslayout'>
                                        <h1 className='home__artsname'><em>JULES LUCCIARDI</em></h1>
                                        <p><em>Blablabla bla bla bla</em></p>
                                    </div>
                                    <Image className='home__underlinearts' src={presJul} />
                                </Col> */}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
    )
}

