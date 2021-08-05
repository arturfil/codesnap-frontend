import React from 'react'
import { Spinner } from 'react-bootstrap'

const CustomSpinner = () => {
  return (
    <div className="text-center">
      <Spinner 
        style={{ marginTop: '40px', height: '80px', width: '80px' }} 
        animation="border" 
        role="status" 
      />
      <h4>Loading ...</h4>
    </div>
  )
}

export default CustomSpinner
