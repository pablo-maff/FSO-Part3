import React from 'react'
import Button from './Button'


const Persons = ({ numbers, request }) => 
  <>
    <h2>Numbers</h2>
    {numbers.map(person =>
      <p key={person.id}>
        {person.name}: {person.number} {' '}
        <Button text='delete' onClick={() =>
          window.confirm(`Delete ${person.name}`) &&
          request(person.id)} />
      </p>
    )}
  </>


export default Persons