import React from 'react'

const Notification = ({ message }) => {
  if (message === null) return null

  else if (message.includes('ERROR')) {
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  return (
    <div className='success'>
      {message}
    </div>
  )
}

export default Notification