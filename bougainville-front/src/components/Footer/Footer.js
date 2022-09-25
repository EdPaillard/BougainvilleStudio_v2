import React from 'react';

import Container from 'react-bootstrap/Container';

import './Footer.css';

export default function Footer() {
  return <Container className='mt-2r'>
      <div className='separateBar'></div>
            <ul className="listRS mt-2r">
                <li className='pulse'><a href="https://twitter.com/Squallichon"><img  alt="Logo Twitter" className="imgRS" src="/twit_white.png" title="Follow sur Twitter !" /></a></li>
                <li className='pulse'><a href="https://github.com/EdPaillard"><img  alt="Logo Github" className="imgRS" src="/git_white.png"  title="GitHub" /></a></li>
                <li className='pulse'><a href="https://github.com/EdPaillard"><img alt="Logo Instagram" className="imgRS" src="/insta_white.png" title="Abonnez-vous sur Instagram !" /></a></li>
                <li className='pulse'><a href="https://www.linkedin.com/in/edouard-paillard-533325105/"><img alt="Logo Linkedin" className="imgRS" src="/link_white.png" title="Retrouvez-nous sur Linkedin !" /></a></li>
                <li className='pulse'><a href="https://www.facebook.com/edouard.paillard.5"><img alt="Logo Facebook" className="imgRS" src="/fb_white.png" title="Retrouvez-nous sur Facebook !" /></a></li>
                <li className='pulse'><a href="https://github.com/EdPaillard"><img alt="Logo Artstation" className="imgRS" src="/art_white.png" title="Retrouvez-nous sur Artstation !" /></a></li>
            </ul>
  </Container>;
}
