import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Banner from '../Banner/Banner';
import Fragments from '../Fragments/Fragments';
import Footer from '../Footer/Footer';
import Presentation from '../Presentation/Presentation';
import ArtistsList from '../ArtistsList/ArtistsList';
import Image from 'react-bootstrap/Image';
// import Carrousel from '../Carrousel/Carrousel';
// import ShopCase from '../ShopCase/ShopCase';

import './Home.css';

export default function Home() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [frags, setFrags] = useState();

    useEffect(() => {
        axios.get('http://162.19.66.30:5000/fragments')
        .then(res => {
            setFrags(res.data);
        })
    }, [])

    return ( <>
                <Banner isLogged={isLogged} setIsLogged={setIsLogged} showLogin={showLogin} showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} /> 
                <div className='h-100vh'>
                    <div className='formatBanner'>
                        <Image src='./banniere_temp2.png' className='formatBanner__img' />
                        <Image src='./bougainville_title.png' className='formatBanner__title' />
                        <div className='banner__first'></div>
                        <div className='banner__second'></div>
                        <div className='banner__third'></div>
                    </div>
                    {/* <Carrousel /> */}
                    <Container className='presentation mt-5r'>
                        <h1 className='presentation__title p-4'>A propos de Bougainville</h1>
                    </Container>
                    <Presentation className='presentation__widget' />
                    <Container className='flex flex__sb mt-5r'>
                    {frags ? (<Fragments id={frags[0]._id} title={frags[0].title} miniature={frags[0].miniature} main={'main'} main__title={'main__title'} logoBougTrunc={'logo'} main__link={"main__link"} index={1} />) : null}
                    {frags ? (<Fragments id={frags[1]._id} title={frags[1].title} miniature={frags[1].miniature} main={'main'} main__title={'main__title'} logoBougTrunc={'logo'} main__link={"main__link"} index={2}/>) : null}
                    </Container>
                    <ArtistsList />
                    {/* <ShopCase /> */}
                    <Footer /> 
                </div>
            </>
    )
}

