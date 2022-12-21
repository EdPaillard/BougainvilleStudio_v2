import React, { useState } from 'react'

import './LinksRS.css';

export default function LinksRS({ linkSM, linkCss, divCss }) {

    const [socialMedias, setSocialMedias] = useState('linkRS__linkdivHoverOff')

    function riseSM() {
        if(socialMedias === 'linkRS__linkdivHoverOff') {
            setSocialMedias('linkRS__linkdivHover')
        } else {
            setSocialMedias('linkRS__linkdivHoverOff')
        }
    }

  return (<>
        <a className={`linkRS__${linkCss}`} href={linkSM} onMouseEnter={() => riseSM()} onMouseLeave={() => riseSM()}></a>
        <div className={`linkRS__${divCss} ${socialMedias}`}></div>
        </>
  )
}
