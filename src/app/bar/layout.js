import React from 'react'

const Barlayout = ({ children }) => {
  return (
    <div>
      <div>
        <h1>Welcome to the Bar</h1>
        <button  className='btn btn-primary'>Get a drink</button>
      </div>
      {children}
    </div>
  )
}

export default Barlayout