import React from 'react'

const Heading = ({title = "Enter Title"}) => {
  return (
    <h3 className='font-bold text-lg '>{title}</h3>
  )
}

export default Heading