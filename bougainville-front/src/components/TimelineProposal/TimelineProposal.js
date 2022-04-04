import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import './TimelineProposal.css';

export default function TimelineProposal({ id, title, miniature }) {
  return <Container>
      <Stack>
        <Image fluid className='timelineProposal__image' alt='fragment_miniature' src={`/fragsPictures/${miniature}`} />
        <h3 className='text-white'>{title}</h3>
      </Stack>
  </Container>;
}
