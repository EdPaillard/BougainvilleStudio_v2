import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import './Artists.css';


function Artists({ photo, name, role, description, facebook, twitter, artstation, github, instagram, linkedin, youtube, flex__rd }) {
    return (
        <Card className={`flexA ${flex__rd} arts__bg mb-5r`} text='light'>
            <Card.Img className='img_format' src={photo} />
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {role}
                </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <div className='footer'>
                { facebook ? <Card.Link href={facebook}>
                    <Image src='/fb_white.png'/>
                </Card.Link> : null }
                { twitter ? <Card.Link href={twitter}>
                    <Image src='/twit_white.png' />
                </Card.Link> : null }
                { artstation ? <Card.Link href={artstation}>
                    <Image src='/art_white.png' />
                </Card.Link> : null }
                { github ? <Card.Link href={github}>
                    <Image src='/git_white.png' />
                </Card.Link> : null }
                { instagram ? <Card.Link href={instagram}>
                    <Image src='/insta_white.png' />
                </Card.Link> : null }
                { linkedin ? <Card.Link href={linkedin}>
                    <Image src='/link_white.png' />
                </Card.Link> : null }
                { youtube ? <Card.Link href={youtube}>
                    <Image src='/ytb.png' />
                </Card.Link> : null }
                </div>
            </Card.Body>
        </Card>
    );
}

export default Artists;