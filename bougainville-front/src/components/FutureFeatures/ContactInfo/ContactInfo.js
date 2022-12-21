import React from 'react';

import './ContactInfo.css';

export default function ContactInfo({ nom, age, sexe, origine, grade }) {
  return <tbody className='tbody'>
        <tr>
          <th className='th-w'>Nom</th>
          <td className='td-w'>{nom}</td>
        </tr>
        <tr>
          <th className='th-w'>Age</th>
          <td className='td-w'>{age}</td>
        </tr>
        <tr>
          <th className='th-w'>Sexe</th>
          <td className='td-w'>{sexe}</td>
        </tr>
        <tr>
          <th className='th-w'>Origine</th>
          <td className='td-w'>{origine}</td>
        </tr>
        <tr>
          <th className='th-w'>Grade</th>
          <td className='td-w'>{grade}</td>
        </tr>
  </tbody>;
}
