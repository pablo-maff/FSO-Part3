import React from 'react'

const Filter = ({ newFilter, handleFilter }) =>
  <>
    filter shown with <input
      value={newFilter}
      onChange={handleFilter}
    />
  </>

export default Filter