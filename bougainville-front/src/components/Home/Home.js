import React, { useState } from 'react';

import Banner from '../Banner/Banner';
import Carrousel from '../Carrousel/Carrousel';
import NewsCase from '../NewsCase/NewsCase';
import ShopCase from '../ShopCase/ShopCase';
import Footer from '../Footer/Footer';

export default function Home() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    return ( <>
                <Banner isLogged={isLogged} setIsLogged={setIsLogged} showLogin={showLogin} showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} /> 
                <div>
                    <Carrousel />
                    <NewsCase />
                    <ShopCase />
                    <Footer /> 
                </div>)
            </>
    )
}

