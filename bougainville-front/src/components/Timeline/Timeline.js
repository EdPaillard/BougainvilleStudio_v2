import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Fragments from '../Fragments/Fragments';
import TimelineProposal from '../TimelineProposal/TimelineProposal';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './Timeline.css'

export default function Timeline() {

  const [id, setId] = useState(sessionStorage.getItem('id'));
  const [frags, setFrags] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [borderColor, setBorderColor] = useState('borderColor');
  const [ids, setIds] = useState([]);
  const [timeFixed, setTimeFixed] = useState(false);
  const [timelineTitle, setTimelineTitle] = useState();
  const [success, setSuccess] = useState(false);
  const [logFailed, setLogFailed] = useState(false);

  const handleClick = (id) => {
    if(ids.includes(id)) {
      setIds(ids.filter(el => el !== id));
      setTimeline(timeline.filter(el => el.id !== id));
    } else {
      setIds(oldIds => [...oldIds, id]);

      axios.get(`http://162.19.66.30:5000/fragments/read/${id}`)
      .then(res => {
        setTimeline(oldData => [...oldData, { id: res.data._id, title: res.data.title, miniature: res.data.miniature, description: res.data.description, content: res.data.content }]);
      });
    }
  }

  const sendTimelineToDb = (event) => {
    event.preventDefault();
    const obj = {
      title: timelineTitle,
      content: timeline,
      userId: id
    }
    axios.post('http://162.19.66.30:5000/timeline/fixed', obj)
    .then(res => {
      if(res.statusText === 'Created') {
        setTimeFixed(false);
        setSuccess(true);
        setTimeline([]);
        setIds([]);
      }
    });
  }

  useEffect(() => {
    axios.get('http://162.19.66.30:5000/fragments')
    .then(res => {
      setFrags(res.data);
    })
  }, [])

  return !timeFixed ? (<div className='h-100vh overflow-s'>
      <Banner />
      <Container className='d-flex wrap flex__gap1'>
      {frags.map((frag) => {
        return ids.includes(frag._id) ? (
        <Fragments 
          key={frag._id}
          id={frag._id} 
          title={frag.title} 
          miniature={frag.miniature} 
          timeline={'timeline'} 
          borderColor={borderColor} 
          handleClick={handleClick}
        /> ) : (
        <Fragments 
          key={frag._id}
          id={frag._id} 
          title={frag.title} 
          miniature={frag.miniature} 
          timeline={'timeline'} 
          handleClick={handleClick}
        />
          )
      })}
      {timeline.length > 0 ? (<>
      <Container className='d-flex timeline__container'>
        <h3 className='timeline__title text-white'>Votre timeline...</h3>
        {timeline.map((time) => {
          return (
            <TimelineProposal 
            key={time.id} 
            id={time.id}
            title={time.title}
            miniature={time.miniature}          
            />
            )})}
      </Container> 
      <Button variant='secondary' onClick={() => {
        if(id === null) {
          setLogFailed(true);
        } else {
          setTimeFixed(true)
        }
        }}>Fixer les lignes du temps</Button>
        </>) : null }
        <Container>
          {success ? (<Alert onClose={() => setSuccess(false)} variant='success' dismissible>Les lignes du temps sont figées... Pour l'instant...</Alert>) : null}
          {logFailed ? (<Alert onClose={() => setLogFailed(false)} variant='danger' dismissible>Connectez-vous pour jouer avec le temps !</Alert>) : null}
        </Container>
      </Container>
      <Footer />
  </div>) :
  (<div className='h-100vh overflow-s'>
  <Banner />
  <Container>
    <Form onSubmit={(event) => {
        sendTimelineToDb(event)}}>
      <Form.Group className="mb-3" controlId="formTimeline">
        <Form.Label className='text-white'>Nommer votre ligne du temps</Form.Label>
        <Form.Control onChange={(event) => setTimelineTitle(event.target.value)} type="text" placeholder="Dénouer les arcanes du temps..." />
      </Form.Group>
      <Button type='submit'>Bouleverser le continuum...</Button>
    </Form>
  </Container>
  <Footer />
  </div>
  );
}
