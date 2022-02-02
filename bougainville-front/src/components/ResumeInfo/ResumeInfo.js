import React from 'react';

import Container from 'react-bootstrap/Container';

import './ResumeInfo.css';

export default function ResumeInfo({ role, resume }) {
  return <Container className='flex flex__aic resumeinfo'>
      <h1 className='resumeinfo__role'>{role}</h1>
      <p className='resumeinfo__resume ml-1r'>{resume}</p>
  </Container>;
}
