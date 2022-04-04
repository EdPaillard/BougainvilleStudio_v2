import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';

export default function AdminScene({ setScene }) {

    const handleClick = () => {
        const obj = {
            background: 'vignette_bg2.png',
            PNJPicture: 'vignetteheros2.png',
            PNJSentence: 'Alors Hautbrave !',
            option1: 'On s\'en va !',
            option2: 'Sans dire !',
            option3: 'Au revoir ?...',
            saveScene: 2
        }

        axios.post('http://localhost:5000/heroes/create/scene', obj)
        .then(res => console.log(res))
    }

  return <div>
      <Button onClick={() => handleClick()}>
        Create scene
      </Button>
  </div>;
}
