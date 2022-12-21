import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

import LinksRS from '../LinksRS/LinksRS';

import './Presentation.css'

function Presentation() {

    const [hoverCSS, setHoverCSS] = useState('');

    function underlineRS() {
        if(hoverCSS === '' || hoverCSS === 'underimghoverOFF') {
            setHoverCSS('underimghover');
        } else {
            setHoverCSS('underimghoverOFF');
        }
    }

    return ( <Container fluid className='pres__cont' onMouseEnter={() => underlineRS()} onMouseLeave={() => underlineRS()}>
        <div className='pres__imgcont'>
            <Image className='pres__image' fluid src='assets/4.png' />
            <div className='pres__divtext'>
                <p className='pres__text'>Bougainville est un projet collaboratif crossmedia. Il vous plonge dans les aventures d'un capitaine de la Marine, lancé dans l'exploration balbutiante d'un vaste univers. Mêlant Grandes Découvertes et Odyssée, Bougainville recherche autant l'aventure que la réflexion sur les Hommes devant l'inconnu, l'immense, devant eux-mêmes... <br/><br/>La narration sera éclatée, explosée dans le temps, et publiée dans l'ordre de création sous forme de fragments. Il sera de la reponsabilité du lecteur de reconstruire une chronologie qui lui est propre, de se faire son opinion sur les faits présentés.</p>
            </div>
            <div className='pres__underdiv'>
                <Image className={`pres__underimg ${hoverCSS}`} src='assets/13.png' />
                <LinksRS linkSM="#" linkCss={'linkLP'} divCss={'linkdivLP'} />
                <LinksRS linkSM="#" linkCss={'linkRP'} divCss={'linkdivRP'} />
            </div>
        </div>
    </Container> );
}

export default Presentation;