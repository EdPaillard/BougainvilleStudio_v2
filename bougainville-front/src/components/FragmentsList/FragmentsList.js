import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Fragments from '../Fragments/Fragments';
import Banner from '../Banner/Banner';

export default function FragmentsList() {

  const [frags, setFrags] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/fragments')
    .then(res => {
      console.log(res.data);
      setFrags(res.data);
      console.log(frags)
    })
  }, [])

  return <>{frags ? (<div className='h-100vh'>
      <Banner />

      {frags.map((frag) => {
        return <Fragments key={frag._id} title={frag.title} description={frag.description} miniature={frag.miniature} content={frag.content} />
      })}
  </div>) : null};
  </>
}
