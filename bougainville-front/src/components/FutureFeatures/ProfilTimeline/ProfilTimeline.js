import React from 'react';

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import './ProfilTimeline.css';

export default function ProfilTimeline({ title, content }) {
  return <div>
      <Stack direction="horizontal">
        <h1 className='text-white'>{title}</h1>
        {content.map(el => {
            return <Image key={el._id} fluid className='profilTimeline__image' alt={el.title} src={`/fragsPictures/${el.miniature}`} />
        })}
      </Stack>
  </div>;
}
