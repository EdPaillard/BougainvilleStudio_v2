import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';

import './Presentation.css'

function Presentation() {
    return ( <Container className='mt-4 flex flex__fdr'>
        <div className='flex__fdc'>
            <p className='pres__text'>Bougainville est un projet collaboratif crossmedia. Il vous plonge dans les aventures d'un capitaine de la Marine, lancé dans l'exploration balbutiante d'un vaste univers. Mêlant Grandes Découvertes et Odyssée, Bougainville recherche autant l'aventure que la réflexion sur les Hommes devant l'inconnu, l'immense, devant eux-mêmes...</p>
            <p className='pres__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam sem, mattis quis diam vitae, pellentesque tincidunt leo. Mauris fermentum turpis non libero ultrices, ac imperdiet mi imperdiet. Sed ornare, nunc eu pulvinar lobortis, tortor justo faucibus ex, eu hendrerit dui dolor a urna. Praesent nec faucibus massa, eu aliquam nunc. Proin a ultrices ex. Curabitur magna nisl, luctus sit amet dolor nec, imperdiet bibendum nunc. Sed posuere ligula sit amet dui mattis laoreet. Duis vel metus luctus velit sodales elementum at et magna. Donec consequat dui sed arcu egestas aliquam. Morbi ac enim vel elit semper euismod. Nulla feugiat vehicula ornare. Curabitur et velit et nulla laoreet iaculis. Integer tempus posuere tortor, ac luctus ipsum eleifend nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
            <p className='pres__text'>In semper venenatis convallis. Donec faucibus tortor vel leo placerat, vulputate ultricies arcu lobortis. Aliquam erat volutpat. Pellentesque dictum lacinia mollis. Nunc lectus turpis, consequat at velit eu, aliquam blandit lectus. Donec interdum bibendum velit vel hendrerit. Pellentesque varius convallis nisi, nec tempor massa interdum non. Suspendisse potenti. Suspendisse pellentesque dui mauris, et porta sem imperdiet at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eu tincidunt leo, eget porta est. Sed ultricies sem nec turpis pharetra lacinia pellentesque id tellus.</p>
        </div>
        <Image className='pres__image' src='./boug_logo_f.png' />
    </Container> );
}

export default Presentation;