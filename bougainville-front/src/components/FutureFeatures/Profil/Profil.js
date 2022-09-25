import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Banner from '../Banner/Banner';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Trophy from '../Trophy/Trophy';
import ProfilTimeline from '../ProfilTimeline/ProfilTimeline';
import ProfilEdit from '../ProfilEdit/ProfilEdit';
import Footer from '../Footer/Footer';

import './Profil.css';

export default function Profil() {

  const [id, setId] = useState(sessionStorage.getItem('id'));
  const [user, setUser] = useState();
  const [edit, setEdit] = useState(false);
  const [editPic, setEditPic] = useState(false);
  const [profilPic, setProfilPic] = useState();
  const [success, setSuccess] = useState(false);
  const [erreur, setErreur] = useState(false);
  const [trophees, setTrophees] = useState();
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    axios.get(`http://162.19.66.30:5000/user/${id}`)
    .then(res => {
      setUser({pseudo: res.data.pseudo, profilimg: res.data.profilimg, age: res.data.age, email: res.data.email, ville: res.data.ville, about: res.data.about})
    });

    axios.get(`http://162.19.66.30:5000/trophees/${id}`)
    .then(res => {
      setTrophees(res.data);
    });

    axios.get(`http://162.19.66.30:5000/timelines/display/${id}`)
    .then(res => {
      console.log(res.data);
      setTimelines(res.data);
    })
  }, [])

  const handleEditPic = () => {
    const obj = {
      profilimg: profilPic
    }
    axios.put(`http://162.19.66.30:5000/user/edit/${id}`, obj)
    .then(res => {
      if(res.statusText === 'OK') {
        setSuccess(true);
      } else {
        setErreur(true);
      }
    });
  }


  return <>
    {user ? (
    <div className='h-100vh overflow-s'>
      <Banner />
      {!edit ? (<Container className='profil mt-2r'>
        <Button className='profil__edit' variant="light" onClick={() => setEdit(true)}>Editer le profil</Button>
        <div className='flex'>
        {!editPic ? (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip" >Cliquer pour modifier</Tooltip>}
        ><Image className='profil__picture cursor' alt='Profil Picture' src={`/userPictures/${user.profilimg}`} onClick={() => setEditPic(true)} />
        </OverlayTrigger>) : (
          <Form.Group className="mb-3 text-white" >
            <CloseButton variant='white' className='mb-3' onClick={() => setEditPic(false)}/>
          <Form.Label className='ml-1r'>Image de profil</Form.Label>
          <Form.Control type='file' onChange={(event) => setProfilPic(event.target.files[0].name)}></Form.Control>
          <Button className='mt-1r' onClick={() => handleEditPic()}>Modifier</Button>
          {success ? (<Alert className='mt-2r' variant='success'>
                            Edition réussie ! 
                        </Alert>) : null}
            {erreur ? (<Alert className='mt-2r' variant='danger'>
                Quelque chose s'est mal passé...
            </Alert>) : null}
          </Form.Group>
          
        )}
        <div className='mt-1r ml-1r'>
          <h1 className='profil__pseudo'>{user.pseudo}</h1>
          <p className='profil__city text-muted pl-1r'>{user.ville}</p>
        </div>
        </div>
        <section className='profil__about mt-2r bg__profil'>
          <h1 className='profil__about__title'><img alt='about_icon' src='/tropheesPictures/about.png' className='mr-1r' />Description</h1>
          <p className='profil__about__body pl-1r'>{user.about}</p>
        </section>
        <section className='profil__about mt-2r bg__profil'>
          <h1 className='profil__about__title'><img alt='trophy_icon' src='/tropheesPictures/trophy_icon.png' className='mr-1r' />Trophées</h1>
          <Container className='flex text-white wrap'>
          {trophees ? (trophees.map(trophy => {
            return <Trophy key={trophy._id} date={trophy.date} entitle={trophy.entitle} resume={trophy.resume} picture={trophy.picture} userId={trophy.userId} />
          })) : null}
          </Container>
        </section>
        <section className='profil__about mt-2r bg__profil'>
          <h1 className='profil__about__title'><img alt='timeline_icon' src='/timeline_icon.png' className='mr-1r' />Les lignes du temps</h1>
          <Container className='flex text-white wrap'>
          {timelines ? (timelines.map(timeline => {
            return <ProfilTimeline key={timeline._id} title={timeline.title} content={timeline.content} />
          })) : null}
          </Container>
        </section>
      </Container>
      ) :
      (<ProfilEdit setEdit={setEdit} id={id} pseudo={user.pseudo} profilimg={user.profilimg} age={user.age} email={user.email} ville={user.ville} about={user.about} />)}
      <Footer />
  </div>) : null }
  </>;
}