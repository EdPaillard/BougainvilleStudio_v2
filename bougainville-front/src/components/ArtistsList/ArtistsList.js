import React from 'react'
import Container from 'react-bootstrap/Container';
import Artists from '../Artists/Artists';

import './ArtistsList.css'


function ArtistsList() {
    const description = [
        "Edouard Paillard est un auteur de talent. Il a collaboré avec Valeurs Actuelles ainsi qu'avec l'envahisseur allemand dès 1939.",
        "Antoine Petiteau est un dessinateur de talent. Après avoir réussi à échouer son école contre toute attente, Antoine s'est lancé en tant que freelance dans le homedraw, activité qui consiste à dessiner des zguegs dans la marge des feuilles qui trainent à la maison.",
        "Jules Lucciardi, dont on est même pas tout à fait sûr de l'orthographe du nom, est un jeune. Un jeune, et pourtant, bien que marseillais, aussi blanc qu'on peut l'être, c'est donc une race de jeune tout à fait particulière. Le genre qu'on pensait perdu à jamais. A ce titre, Jules est tout à la fois une relique, et une merveille. Aimez Jules. N'allez plus chez Celio."
    ]
    const socialMedias = [
        {
            "Facebook": "https://www.facebook.com/edouard.paillard.5",
            "Twitter": 'https://twitter.com/Squallichon',
            "Artstation": 'https://www.artstation.com/',
            'Github': 'https://github.com/EdPaillard',
            'LinkedIn' : 'https://www.linkedin.com/in/edouard-paillard-533325105',
            'Instagram': 'https://www.instagram.com/?hl=fr'
        },
        {
            "Facebook": "https://www.facebook.com/jules.lucciardi",
            "Twitter": 'https://twitter.com/Simon_Duval_SCP',
            "Artstation": 'https://www.artstation.com/',
            'Github': 'https://github.com/',
            'LinkedIn' : 'https://www.linkedin.com',
            'Instagram': 'https://www.instagram.com/?hl=fr'
        },
        {
            "Facebook": "https://www.facebook.com/antoine.petiteau.35",
            "Twitter": 'https://twitter.com/',
            "Artstation": 'https://www.artstation.com/',
            'Github': 'https://github.com/',
            'LinkedIn' : 'https://www.linkedin.com',
            'Instagram': 'https://www.instagram.com/?hl=fr'
        }
    ]
    return (
        <Container>
            <h1 className='txt_color mb-2r'>Les Artistes</h1>
            <Artists photo={'./antoine.png'} name={'Antoine PETITEAU'} role={'Directeur Artistique'} description={description[1]} facebook={socialMedias[2]['Facebook']} twitter={socialMedias[2]['Facebook']} artstation={socialMedias[2]['Artstation']} github={socialMedias[2]['Github']} instagram={socialMedias[2]['Instagram']} linkedin={socialMedias[2]['LinkedIn']} flex__rd='flex__fdr' />
            <Artists photo={'./jules.png'} name={'Jules LUCCIARDI'} role={'Ingénieur Son'} description={description[2]} facebook={socialMedias[1]['Facebook']} twitter={socialMedias[1]['Facebook']} artstation={socialMedias[1]['Artstation']} github={socialMedias[1]['Github']} instagram={socialMedias[1]['Instagram']} linkedin={socialMedias[1]['LinkedIn']} flex__rd='flex__fdrr'/>
            <Artists photo={'./edouard.png'} name={'Edouard PAILLARD'} role={'Auteur, Développeur'} description={description[0]} facebook={socialMedias[0]['Facebook']} twitter={socialMedias[0]['Facebook']} artstation={socialMedias[0]['Artstation']} github={socialMedias[0]['Github']} instagram={socialMedias[0]['Instagram']} linkedin={socialMedias[0]['LinkedIn']} flex__rd='flex__fdr'/>
        </Container>
    );
}

export default ArtistsList;