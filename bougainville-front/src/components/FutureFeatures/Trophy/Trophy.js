import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import './Trophy.css';

export default function Trophy({ date, entitle, resume, picture, userId} ) {

    const [newDate, setNewDate] = useState();

    useEffect(() => {
        const regDate = /.+?(?=T)/;
        const regNewDate = regDate.exec(date);
        setNewDate(regNewDate);
    }, [])

  return <Card className='trophyCard' bg='dark' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`/tropheesPictures/${picture}`} />
                <Card.Body>
                    <Card.Title>{entitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{newDate}</Card.Subtitle>
                    <Card.Text>{resume}</Card.Text>
                </Card.Body>
            </Card>;
}
