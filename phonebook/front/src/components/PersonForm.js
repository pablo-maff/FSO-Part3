import React from 'react'

const PersonForm = ({ newName, newNumber, handleName, handleNumber, addData }) => 
  <>
    <h2>Add a new person</h2>
    <form onSubmit={addData}>
      <div>
        name: <input
          value={newName}
          onChange={handleName}
        /><br />
        number: <input
          value={newNumber}
          onChange={handleNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  </>

export default PersonForm