import React from 'react'
import Button from '../customComponent/button'

const SecondNavbar = ({reset}) => {
  return (
    <div>
        <Button  text={'reset'} size={'sm'} onClick={reset} />
        
    </div>
  )
}

export default SecondNavbar
