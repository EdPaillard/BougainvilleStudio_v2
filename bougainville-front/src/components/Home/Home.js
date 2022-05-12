import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Banner from '../Banner/Banner';
import Carrousel from '../Carrousel/Carrousel';
import Fragments from '../Fragments/Fragments';
import ShopCase from '../ShopCase/ShopCase';
import Footer from '../Footer/Footer';

import './Home.css';

export default function Home() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [frags, setFrags] = useState();

    useEffect(() => {
        axios.get('http://162.19.66.30:5000/fragments')
        .then(res => {
            console.log(res)
            setFrags(res.data);
        })
    }, [])

    return ( <>
                <Banner isLogged={isLogged} setIsLogged={setIsLogged} showLogin={showLogin} showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} /> 
                <div>
                    <Carrousel />
                    <Container className='flex flex__sb mt-5r'>
                    {frags ? (<Fragments id={frags[0]._id} title={frags[0].title} miniature={frags[0].miniature} main={'main'} main__title={'main__title'} logoBougTrunc={'logo'} main__link={"main__link"} />) : null}
                    {frags ? (<Fragments id={frags[1]._id} title={frags[1].title} miniature={frags[1].miniature} main={'main'} main__title={'main__title'} logoBougTrunc={'logo'} main__link={"main__link"}/>) : null}
                    </Container>
                    <ShopCase />
                    <Footer /> 
                </div>)
            </>
    )
}

